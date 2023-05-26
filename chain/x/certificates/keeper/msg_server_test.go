package keeper_test

import (
	"encoding/json"

	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"

	"github.com/EmpowerPlastic/empowerchain/app"
	"github.com/EmpowerPlastic/empowerchain/testutil/sample"
	"github.com/EmpowerPlastic/empowerchain/x/certificates"
	"github.com/EmpowerPlastic/empowerchain/x/certificates/keeper"
)

func (s *TestSuite) TestUpdateParams() {
	testCases := map[string]struct {
		msg func(*app.EmpowerApp) *certificates.MsgUpdateParams
		err error
	}{
		"happy path": {
			msg: func(empowerApp *app.EmpowerApp) *certificates.MsgUpdateParams {
				return &certificates.MsgUpdateParams{
					Authority: empowerApp.CertificateKeeper.Authority(),
					Params: certificates.Params{
						AllowedIssuers: []string{s.sampleIssuerAdmin},
					},
				}
			},
			err: nil,
		},
		"unauthorized caller": {
			msg: func(empowerApp *app.EmpowerApp) *certificates.MsgUpdateParams {
				return &certificates.MsgUpdateParams{
					Authority: sample.AccAddress(),
					Params: certificates.Params{
						AllowedIssuers: []string{s.sampleIssuerAdmin},
					},
				}
			},
			err: sdkerrors.ErrUnauthorized,
		},
		"invalid issuer params": {
			msg: func(empowerApp *app.EmpowerApp) *certificates.MsgUpdateParams {
				return &certificates.MsgUpdateParams{
					Authority: empowerApp.CertificateKeeper.Authority(),
					Params: certificates.Params{
						AllowedIssuers: []string{""},
					},
				}
			},
			err: sdkerrors.ErrInvalidAddress,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()

			k := s.empowerApp.CertificateKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)
			msg := tc.msg(s.empowerApp)
			_, err := ms.UpdateParams(goCtx, msg)

			s.Require().ErrorIs(err, tc.err)

			if err == nil {
				s.Require().NoError(err)

				getParams := k.GetParams(s.ctx)
				s.Require().Equal(msg.Params, getParams)
			}
		})
	}
}

func (s *TestSuite) TestCreateCertificate() {
	testCases := map[string]struct {
		msg *certificates.MsgCreateCertificate
		err error
	}{
		"happy path": {
			msg: &certificates.MsgCreateCertificate{
				Owner:          s.sampleOwner,
				Type:           s.sampleCertificationType,
				Issuer:         s.sampleIssuerAdmin,
				AdditionalData: s.sampleAdditionalData,
			},
			err: nil,
		},
		"unauthorized issuer": {
			msg: &certificates.MsgCreateCertificate{
				Owner:          s.sampleOwner,
				Type:           s.sampleCertificationType,
				Issuer:         sample.AccAddress(),
				AdditionalData: s.sampleAdditionalData,
			},
			err: sdkerrors.ErrUnauthorized,
		},
	}

	for name, tc := range testCases {
		s.Run(name, func() {
			s.SetupTest()
			s.PopulateWithSamples()

			k := s.empowerApp.CertificateKeeper
			goCtx := sdk.WrapSDKContext(s.ctx)
			ms := keeper.NewMsgServerImpl(k)

			resp, err := ms.CreateCertificate(goCtx, tc.msg)
			s.Require().ErrorIs(err, tc.err)

			events := s.ctx.EventManager().ABCIEvents()
			if err == nil {
				s.Require().Equal(uint64(1), resp.CertificateId)

				idCounters := k.GetIDCounters(s.ctx)
				s.Require().Equal(uint64(2), idCounters.NextCertificateId)
				certificate, found := k.GetCertificate(s.ctx, tc.msg.Owner, resp.CertificateId)
				s.Require().True(found)
				s.Require().Equal(certificates.Certificate{
					Id:             resp.CertificateId,
					Type:           tc.msg.Type,
					Owner:          tc.msg.Owner,
					Issuer:         tc.msg.Issuer,
					AdditionalData: s.sampleAdditionalData,
				}, certificate)

				s.Require().Len(events, 1)
				parsedEvent, err := sdk.ParseTypedEvent(events[0])
				s.Require().NoError(err)
				eventCreateCertificate, ok := parsedEvent.(*certificates.EventCreateCertificate)
				s.Require().True(ok)
				sampleAdditionalDataJSON, err := json.Marshal(s.sampleAdditionalData)
				s.Require().NoError(err)
				s.Require().Equal(&certificates.EventCreateCertificate{
					CertificateId:   resp.CertificateId,
					Owner:           tc.msg.Owner,
					Issuer:          tc.msg.Issuer,
					CertificateType: "CREDIT_RETIREMENT",
					AdditionalData:  string(sampleAdditionalDataJSON),
				}, eventCreateCertificate)

			} else {
				s.Require().Len(events, 0)
			}
		})
	}
}
