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
whitespace += $(whitespace)
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

ver:
	@echo $(VERSION)

all: install lint test

BUILD_TARGETS := build install

build: BUILD_ARGS=-o $(BUILD_DIR)/

$(BUILD_TARGETS): go.sum $(BUILD_DIR)/
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
	@go test -timeout 120s -v ./...

test-with-coverage:
	@go test -timeout 140s -v -coverpkg=./... -coverprofile=coverage.out -covermode=atomic ./...

smoketest: install
	./scripts/test/smoke_gov_proposals.sh
	./scripts/test/smoke_poe.sh
	./scripts/test/smoke_plastic_credit.sh

###############################################################################
###                                  Proto                                  ###
###############################################################################

proto:
	@echo
	@echo "=========== Generate Message ============"
	@echo
	./scripts/protocgen.sh $(COSMOS_SDK_VERSION)
	@echo
	@echo "=========== Generate Complete ============"
	@echo

swagger-gen:
	@echo
	@echo "=========== Generate Message ============"
	@echo
<<<<<<< HEAD
	./scripts/generate-docs.sh $(COSMOS_SDK_VERSION)
=======
	./scripts/generate-docs.sh
>>>>>>> 6983bf8886cd049ef52eef52dd55ea7c98616e42
	@echo
	@echo "=========== Generate Complete ============"
	@echo

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

kill:
	@echo "Killing empowerd and removing previous data"
	-@rm -rf ./tmp/empowerchain-local-1
	-@pkill empowerd 2>/dev/null


###############################################################################
###                                Linting                                  ###
###############################################################################

lint:
	@echo "--> Running linter"
	@go run github.com/golangci/golangci-lint/cmd/golangci-lint run --timeout=10m

format:
	@go run github.com/golangci/golangci-lint/cmd/golangci-lint run ./... --fix
	@go run mvdan.cc/gofumpt -l -w x/ app/ testutil/ cmd/

###############################################################################
###                      Avoid "make: 'x' is up to date.                    ###
###############################################################################

.PHONY: ver all build clean test lint serve kill test smoketest format proto \
    build-linux go-mod-cache