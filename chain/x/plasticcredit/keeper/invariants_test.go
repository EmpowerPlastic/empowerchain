package keeper_test

import (
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit"
	"github.com/EmpowerPlastic/empowerchain/x/plasticcredit/keeper"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (s *TestSuite) TestTotalSuppliesInvariant() {
	s.Run("happy path", func() {
		s.SetupTest()
		s.PopulateWithSamples()
		k := s.empowerApp.PlasticcreditKeeper
		goCtx := sdk.WrapSDKContext(s.ctx)
		ms := keeper.NewMsgServerImpl(k)

		_, err := ms.IssueCredits(goCtx, &plasticcredit.MsgIssueCredits{
			Creator:      s.sampleIssuerAdmin,
			ProjectId:    s.sampleProjectId,
			SerialNumber: "123",
			CreditAmount: 10000,
		})
		s.Require().NoError(err)

		_, err = ms.IssueCredits(goCtx, &plasticcredit.MsgIssueCredits{
			Creator:      s.sampleIssuerAdmin,
			ProjectId:    s.sampleProjectId,
			SerialNumber: "00001",
			CreditAmount: 10000,
		})
		s.Require().NoError(err)

		_, err = ms.TransferCredits(goCtx, &plasticcredit.MsgTransferCredits{
			From:   s.sampleApplicantAdmin,
			To:     sample.AccAddress(),
			Denom:  s.sampleCreditClassAbbreviation + "/123",
			Amount: 25,
			Retire: false,
		})
		s.Require().NoError(err)

		_, err = ms.TransferCredits(goCtx, &plasticcredit.MsgTransferCredits{
			From:   s.sampleApplicantAdmin,
			To:     sample.AccAddress(),
			Denom:  s.sampleCreditClassAbbreviation + "/00001",
			Amount: 510,
			Retire: true,
		})
		s.Require().NoError(err)

		_, err = ms.RetireCredits(goCtx, &plasticcredit.MsgRetireCredits{
			Owner:  s.sampleApplicantAdmin,
			Denom:  s.sampleCreditClassAbbreviation + "/00001",
			Amount: 15,
		})
		s.Require().NoError(err)

		invariant := keeper.TotalSupply(k)
		_, broken := invariant(s.ctx)
		s.Require().False(broken)
	})
}
