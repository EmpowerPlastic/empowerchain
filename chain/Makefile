#!/usr/bin/make -f

BINDIR ?= $(GOPATH)/bin
BINARY_NAME := "empowerd"
CHAIN_NAME := "empowerchain"
VERSION := $(shell echo $(shell git describe --tags) | sed 's/^v//')
COMMIT := $(shell git log -1 --format='%H')
LEDGER_ENABLED ?= true
SDK_PACK := $(shell go list -m github.com/cosmos/cosmos-sdk | sed  's/ /\@/g')
DOCKER := $(shell which docker)
BUILD_DIR ?= $(CURDIR)/build
COSMOS_SDK_VERSION := $(shell go list -m -f '{{ .Version }}' github.com/cosmos/cosmos-sdk)

GO_SYSTEM_VERSION = $(shell go version | cut -c 14- | cut -d' ' -f1 | cut -d'.' -f1-2)
REQUIRE_GO_VERSION = 1.20

export GO111MODULE = on

# process build tags

build_tags = netgo
ifeq ($(LEDGER_ENABLED),true)
  ifeq ($(OS),Windows_NT)
    GCCEXE = $(shell where gcc.exe 2> NUL)
    ifeq ($(GCCEXE),)
      $(error gcc.exe not installed for ledger support, please install or set LEDGER_ENABLED=false)
    else
      build_tags += ledger
    endif
  else
    UNAME_S = $(shell uname -s)
    ifeq ($(UNAME_S),OpenBSD)
      $(warning OpenBSD detected, disabling ledger support (https://github.com/cosmos/cosmos-sdk/issues/1988))
    else
      GCC = $(shell command -v gcc 2> /dev/null)
      ifeq ($(GCC),)
        $(error gcc not installed for ledger support, please install or set LEDGER_ENABLED=false)
      else
        build_tags += ledger
      endif
    endif
  endif
endif

ifeq (cleveldb,$(findstring cleveldb,$(EMPOWER_BUILD_OPTIONS)))
  build_tags += gcc
else ifeq (rocksdb,$(findstring rocksdb,$(EMPOWER_BUILD_OPTIONS)))
  build_tags += gcc
endif
build_tags += $(BUILD_TAGS)
build_tags := $(strip $(build_tags))

whitespace :=
whitespace := $(whitespace) $(whitespace)
comma := ,
build_tags_comma_sep := $(subst $(whitespace),$(comma),$(build_tags))

# process linker flags

ldflags = -X github.com/cosmos/cosmos-sdk/version.Name=$(CHAIN_NAME) \
		  -X github.com/cosmos/cosmos-sdk/version.AppName=$(BINARY_NAME) \
		  -X github.com/cosmos/cosmos-sdk/version.Version=$(VERSION) \
		  -X github.com/cosmos/cosmos-sdk/version.Commit=$(COMMIT) \
		  -X "github.com/cosmos/cosmos-sdk/version.BuildTags=$(build_tags_comma_sep)"

ifeq (cleveldb,$(findstring cleveldb,$(EMPOWER_BUILD_OPTIONS)))
  ldflags += -X github.com/cosmos/cosmos-sdk/types.DBBackend=cleveldb
else ifeq (rocksdb,$(findstring rocksdb,$(EMPOWER_BUILD_OPTIONS)))
  ldflags += -X github.com/cosmos/cosmos-sdk/types.DBBackend=rocksdb
endif
ifeq (,$(findstring nostrip,$(EMPOWER_BUILD_OPTIONS)))
  ldflags += -w -s
endif
ifeq ($(LINK_STATICALLY),true)
	ldflags += -linkmode=external -extldflags "-Wl,-z,muldefs -static"
endif
ldflags += $(LDFLAGS)
ldflags := $(strip $(ldflags))

BUILD_FLAGS := -tags "$(build_tags)" -ldflags '$(ldflags)'
# check for nostrip option
ifeq (,$(findstring nostrip,$(EMPOWER_BUILD_OPTIONS)))
  BUILD_FLAGS += -trimpath
endif

###############################################################################
###                                  Build                                  ###
###############################################################################

check_go_version:
ifneq ($(GO_SYSTEM_VERSION), $(REQUIRE_GO_VERSION))
	@echo "ERROR: Go $(REQUIRE_GO_VERSION) is required for $(VERSION) version of EmpowerChain. Currently Go $(GO_SYSTEM_VERSION) is being used."
	exit 1
endif

ver:
	@echo $(VERSION)

all: install lint test

BUILD_TARGETS := build install

build: BUILD_ARGS=-o $(BUILD_DIR)/

$(BUILD_TARGETS): check_go_version go.sum $(BUILD_DIR)/
	go $@ -mod=readonly $(BUILD_FLAGS) $(BUILD_ARGS) ./...

$(BUILD_DIR)/:
	mkdir -p $(BUILD_DIR)/

build-linux-amd64: go.sum
	LEDGER_ENABLED=false GOOS=linux GOARCH=amd64 $(MAKE) build

build-linux-arm64: go.sum
	LEDGER_ENABLED=false GOOS=linux GOARCH=arm64 $(MAKE) build

build-darwin-amd64: go.sum
	LEDGER_ENABLED=false GOOS=darwin GOARCH=amd64 $(MAKE) build

build-darwin-arm64: go.sum
	LEDGER_ENABLED=false GOOS=darwin GOARCH=arm64 $(MAKE) build

build-windows-amd64: go.sum
	LEDGER_ENABLED=false GOOS=windows GOARCH=amd64 $(MAKE) build

go-mod-cache: go.sum
	@echo "--> Download go modules to local cache"
	@go mod download

go.sum: go.mod
	@echo "--> Ensure dependencies have not been modified"
	@go mod verify

clean:
	rm -rf $(BUILD_DIR)
	rm -f $(shell which $(BINARY_NAME))

###############################################################################
###                                  Test                                   ###
###############################################################################

test:
	@go test -timeout 10m -v ./...

test-unit:
	@go test -v -test.short ./...

test-with-coverage:
	@go test -timeout 10m -v -coverpkg=./... -coverprofile=coverage.out -covermode=atomic ./...

smoketest: install
	./scripts/test/smoke_gov_proposals.sh
	./scripts/test/smoke_poe.sh
	./scripts/test/smoke_plastic_credit.sh
	./scripts/test/smoke_wasm.sh
	./scripts/test/smoke_certificate.sh
	# TODO: ADD BACK IN https://github.com/EmpowerPlastic/empowerchain/issues/516
	#./scripts/test/smoke_ibc.sh

###############################################################################
###                               Simulations                               ###
###############################################################################

SIMAPP = github.com/EmpowerPlastic/empowerchain/app/simulation
SIM_TEST_DIR = ./app/simulation
TOOLS_DESTDIR  ?= $(GOPATH)/bin
RUNSIM         = $(TOOLS_DESTDIR)/runsim
default_seeds := 1,2,4,7,32,123,124,582,1893,2989,3012,4728,37827,981928,87821, \
	891823782,989182,89182391,11,22,44,77,99,2020,3232,123123,124124,582582,18931893, \
	29892989,30123012,47284728,7601778,8090485,977367484,491163361,424254581,673398983

JOBS ?= 4
SEED ?= 1
SEEDS ?= $(subst $(whitespace),$(empty),$(default_seeds))
PERIOD ?= 5
NUM_BLOCKS ?= 100
BLOCK_SIZE ?= 200

# Install the runsim binary
runsim: $(RUNSIM)
$(RUNSIM):
	@echo "Installing runsim..."
	@go install github.com/cosmos/tools/cmd/runsim@v1.0.0

test-sim-import-export: runsim
	@echo "Running application import/export simulation. This may take several minutes..."
	@runsim -Jobs=4 -SimAppPkg=$(SIMAPP) -ExitOnFail 50 5 TestAppImportExport

test-sim-after-import: runsim
	@echo "Running application simulation-after-import. This may take several minutes..."
	@runsim -Jobs=4 -SimAppPkg=$(SIMAPP) -ExitOnFail 50 5 TestAppSimulationAfterImport

test-sim-multi-seed-short: runsim
	@echo "Running short multi-seed application simulation. This may take awhile!"
	@runsim -Jobs=4 -SimAppPkg=$(SIMAPP) -ExitOnFail 50 10 TestFullAppSimulation

test-sim-multi-seed-long: runsim
	@echo "Running long multi-seed application simulation. This may take awhile!"
	@runsim -Jobs=4 -SimAppPkg=$(SIMAPP) -ExitOnFail 500 50 TestFullAppSimulation

test-sim-nondeterminism:
	@echo "Running non-determinism test..."
	go test $(SIM_TEST_DIR) -mod=readonly -run TestAppStateDeterminism -Enabled=true \
		-NumBlocks=100 -BlockSize=200 -Commit=true -Period=0 -v -timeout 24h

###############################################################################
###                                  Proto                                  ###
###############################################################################

protoVer=0.11.6
protoImageName=ghcr.io/cosmos/proto-builder:$(protoVer)
protoImage=$(DOCKER) run --rm -v $(CURDIR):/workspace --workdir /workspace $(protoImageName)

proto:
	@echo
	@echo "=========== Generate Message ============"
	@echo
	@$(protoImage) sh ./scripts/protocgen.sh
	@echo
	@echo "=========== Generate Complete ============"
	@echo

swagger-gen:
	@echo
	@echo "=========== Generate Swagger Docs ============"
	@echo
	./scripts/generate-docs.sh
	$(MAKE) update-swagger-docs
	@echo
	@echo "=========== Generate Complete ============"
	@echo

update-swagger-docs:
	statik -src=client/docs/swagger-ui -dest=client/docs -f -m
	@if [ -n "$(git status --porcelain)" ]; then \
		echo "\033[91mSwagger docs are out of sync!!!\033[0m";\
		exit 1;\
	else \
		echo "\033[92mSwagger docs are in sync\033[0m";\
	fi

###############################################################################
###                                  Serve                                  ###
###############################################################################

serve:
	@echo
	@echo "===========     Serve     ============"
	@echo
	./scripts/serve.sh
	@echo
	@echo "===========  Serving now  ============"
	@echo

serve-ibc:
	@echo
	@echo "======= Serve full IBC stack ========="
	@echo
	./scripts/serve_ibc.sh
	@echo
	@echo "===========  Serving now  ============"
	@echo

kill-all:
	@echo "Killing empowerd and removing previous data"
	-@pkill empowerd 2>/dev/null
	-@rm -rf /tmp/empowerchain-local-1
	@echo "Killing gaiad and removing previous data"
	-@pkill gaiad 2>/dev/null
	-@rm -rf /tmp/gaia-local-1
	@echo "Killing relayer and removing previous data"
	-@pkill rly 2>/dev/null
	-@rm -rf /tmp/relayer-stuff
###############################################################################
###                                Linting                                  ###
###############################################################################

lint:
	@echo "--> Running linter"
	@go run github.com/golangci/golangci-lint/cmd/golangci-lint run --timeout=10m

format:
	@go run github.com/golangci/golangci-lint/cmd/golangci-lint run --fix

###############################################################################
###                      Avoid "make: 'x' is up to date.                    ###
###############################################################################

.PHONY: *