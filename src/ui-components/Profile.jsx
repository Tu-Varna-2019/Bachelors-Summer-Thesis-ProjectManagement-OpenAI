/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Card,
  Icon,
  Image,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function Profile(props) {
  const { user, ticket, overrides, ...rest } = props;
  const [
    deleteUnderScoreaccountUnderScorebuttonBackgroundColor,
    setDeleteUnderScoreaccountUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(206,219,252,1)");
  const [
    changeUnderScorepasswordUnderScorebuttonBackgroundColor,
    setChangeUnderScorepasswordUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(206,219,252,1)");
  const [
    switchUnderScoremnotesUnderScorebuttonBackgroundColor,
    setSwitchUnderScoremnotesUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(206,219,252,1)");
  const [
    saveUnderScoreemailUnderScorebuttonBackgroundColor,
    setSaveUnderScoreemailUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,255,255,1)");
  const deleteUnderScoreaccountUnderScorebuttonOnMouseOver = () => {
    setDeleteUnderScoreaccountUnderScorebuttonBackgroundColor(
      "rgba(35, 47, 62, 0.65)"
    );
  };
  const deleteUnderScoreaccountUnderScorebuttonOnMouseLeave = () => {
    setDeleteUnderScoreaccountUnderScorebuttonBackgroundColor(
      "rgba(206, 219, 252, 1)"
    );
  };
  const changeUnderScorepasswordUnderScorebuttonOnMouseOver = () => {
    setChangeUnderScorepasswordUnderScorebuttonBackgroundColor(
      "rgba(35, 47, 62, 0.65)"
    );
  };
  const changeUnderScorepasswordUnderScorebuttonOnMouseLeave = () => {
    setChangeUnderScorepasswordUnderScorebuttonBackgroundColor(
      "rgba(206, 219, 252, 1)"
    );
  };
  const switchUnderScoremnotesUnderScorebuttonOnMouseOver = () => {
    setSwitchUnderScoremnotesUnderScorebuttonBackgroundColor(
      "rgba(35, 47, 62, 0.65)"
    );
  };
  const switchUnderScoremnotesUnderScorebuttonOnMouseLeave = () => {
    setSwitchUnderScoremnotesUnderScorebuttonBackgroundColor(
      "rgba(206, 219, 252, 1)"
    );
  };
  const switchUnderScoremnotesUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/home",
  });
  const saveUnderScoreemailUnderScorebuttonOnMouseLeave = () => {
    setSaveUnderScoreemailUnderScorebuttonBackgroundColor(
      "rgba(255, 255, 255, 1)"
    );
  };
  const saveUnderScoreemailUnderScorebuttonOnMouseOver = () => {
    setSaveUnderScoreemailUnderScorebuttonBackgroundColor(
      "rgba(169, 162, 162, 1)"
    );
  };
  return (
    <View
      width="1920px"
      height="1080px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Profile")}
      {...rest}
    >
      <View
        width="1920px"
        height="1080px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <View
          width="48px"
          height="38px"
          {...getOverrideProps(overrides, "amplify_logo")}
        ></View>
        <Image
          width="1921px"
          height="824px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="247px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://eu-west-1.signin.aws/assets/static/img/signin-background.png"
          {...getOverrideProps(overrides, "aws_image_background_notes")}
        ></Image>
        <Image
          width="1920px"
          height="135px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="112px"
          left="0px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://d1.awsstatic.com/aws-media-series-assets/Site-Merch_AWS-Back-to-Basics_Vid-Series_Hero-BG.c12b4f1f0099e91cbf1dd0b7efbdf53e8e6a8f84.png"
          {...getOverrideProps(overrides, "aws_image_background")}
        ></Image>
        <View
          width="114px"
          height="114px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          position="absolute"
          top="124px"
          left="75px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(
            overrides,
            "vertical-logo-onecolor-neutral-atlassian 1"
          )}
        >
          <View
            padding="0px 0px 0px 0px"
            width="102.7px"
            height="114px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="6.25%"
            right="3.66%"
            {...getOverrideProps(
              overrides,
              "mini-vertical-logo-onecolor-blue-atlassian"
            )}
          >
            <View
              padding="0px 0px 0px 0px"
              width="102.7px"
              height="114px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Group")}
            >
              <View
                padding="0px 0px 0px 0px"
                width="102.7px"
                height="12.84px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="88.74%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Group_2")}
              >
                <View
                  padding="0px 0px 0px 0px"
                  width="90.27px"
                  height="12.84px"
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="12.1%"
                  right="0%"
                  {...getOverrideProps(overrides, "Group_3")}
                >
                  <View
                    padding="0px 0px 0px 0px"
                    width="90.27px"
                    height="12.84px"
                    display="block"
                    gap="unset"
                    alignItems="unset"
                    justifyContent="unset"
                    position="absolute"
                    top="0%"
                    bottom="0%"
                    left="0%"
                    right="0%"
                    {...getOverrideProps(overrides, "Group_4")}
                  >
                    <Icon
                      width="9.7px"
                      height="12.84px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 9.705078125,
                        height: 12.841796875,
                      }}
                      paths={[
                        {
                          d: "M9.70496 9.03735C9.70496 6.82931 8.524 5.80224 5.28889 5.13463C3.49161 4.72387 3.02955 4.31312 3.02955 3.74846C3.02955 3.02955 3.69716 2.7214 4.87813 2.7214C6.31596 2.7214 7.75378 3.18345 9.08865 3.74846L9.08865 0.872815C8.11324 0.410759 6.67542 0 4.98073 0C1.74563 0 0.0513017 1.38617 0.0513017 3.69716C0.0513017 5.54574 0.924111 6.98321 4.26182 7.65083C6.26465 8.06158 6.67542 8.36974 6.67542 9.03735C6.67542 9.70496 6.26466 10.1157 4.82684 10.1157C3.18345 10.1157 1.23227 9.55071 0 8.7805L0 11.81C1.02707 12.3238 2.36194 12.8371 4.82684 12.8371C8.31844 12.9401 9.70496 11.348 9.70496 9.03735Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0%"
                      bottom="0%"
                      left="38.05%"
                      right="51.19%"
                      {...getOverrideProps(overrides, "Vector")}
                    ></Icon>
                    <Icon
                      width="10.89px"
                      height="12.48px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 10.8857421875,
                        height: 12.47802734375,
                      }}
                      paths={[
                        {
                          d: "M0 0L0 12.478L2.67009 12.478L2.67009 2.92695L3.79976 5.49444L7.54822 12.478L10.8859 12.478L10.8859 0L8.21584 0L8.21584 8.06194L7.24043 5.7L4.21052 0L0 0Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="2%"
                      bottom="0.84%"
                      left="87.94%"
                      right="0%"
                      {...getOverrideProps(overrides, "Vector_2")}
                    ></Icon>
                    <Icon
                      width="2.93px"
                      height="12.48px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 2.9267578125,
                        height: 12.47802734375,
                      }}
                      paths={[
                        {
                          d: "M2.92695 0L0 0L0 12.478L2.92695 12.478L2.92695 0Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="2%"
                      bottom="0.84%"
                      left="65.93%"
                      right="30.83%"
                      {...getOverrideProps(overrides, "Vector_3")}
                    ></Icon>
                    <Icon
                      width="9.7px"
                      height="12.84px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 9.705078125,
                        height: 12.841796875,
                      }}
                      paths={[
                        {
                          d: "M9.70497 9.03735C9.70497 6.82931 8.52399 5.80224 5.28889 5.13463C3.49161 4.72387 3.02955 4.31312 3.02955 3.74846C3.02955 3.02955 3.69717 2.7214 4.87813 2.7214C6.31596 2.7214 7.75343 3.18345 9.08865 3.74846L9.08865 0.872815C8.11288 0.410759 6.67541 0 4.98073 0C1.74562 0 0.0513017 1.38617 0.0513017 3.69716C0.0513017 5.54574 0.924114 6.98321 4.26182 7.65083C6.2643 8.06158 6.67541 8.36974 6.67541 9.03735C6.67541 9.70496 6.2643 10.1157 4.82683 10.1157C3.18345 10.1157 1.23227 9.55071 0 8.7805L0 11.81C1.02671 12.3238 2.36194 12.8371 4.82683 12.8371C8.31844 12.9401 9.70497 11.348 9.70497 9.03735Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="0%"
                      bottom="0%"
                      left="51.48%"
                      right="37.77%"
                      {...getOverrideProps(overrides, "Vector_4")}
                    ></Icon>
                    <Icon
                      width="6.93px"
                      height="12.48px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 6.93212890625,
                        height: 12.47802734375,
                      }}
                      paths={[
                        {
                          d: "M0 0L0 12.478L6.00787 12.478L6.93234 9.75662L2.92695 9.75662L2.92695 0L0 0Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="2%"
                      bottom="0.84%"
                      left="13.08%"
                      right="79.24%"
                      {...getOverrideProps(overrides, "Vector_5")}
                    ></Icon>
                    <Icon
                      width="9.65px"
                      height="12.48px"
                      viewBox={{
                        minX: 0,
                        minY: 0,
                        width: 9.65380859375,
                        height: 12.47802734375,
                      }}
                      paths={[
                        {
                          d: "M0 0L0 2.67045L3.235 2.67045L3.235 12.478L6.16191 12.478L6.16191 2.67045L9.65366 2.67045L9.65366 0L0 0Z",
                          fill: "rgba(255,255,255,1)",
                          fillRule: "nonzero",
                        },
                      ]}
                      display="block"
                      gap="unset"
                      alignItems="unset"
                      justifyContent="unset"
                      position="absolute"
                      top="1.99%"
                      bottom="0.84%"
                      left="0%"
                      right="89.31%"
                      {...getOverrideProps(overrides, "Vector_6")}
                    ></Icon>
                  </View>
                </View>
                <Icon
                  width="12.53px"
                  height="12.48px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 12.529296875,
                    height: 12.4775390625,
                  }}
                  paths={[
                    {
                      d: "M8.21587 0L4.3647 0L0 12.4777L3.33771 12.4777L3.95391 10.3726C4.67279 10.5778 5.49437 10.732 6.26462 10.732C7.03487 10.732 7.85645 10.6291 8.57533 10.3726L9.19153 12.4777L12.5292 12.4777L8.21587 0ZM6.26462 8.11324C5.69979 8.11324 5.18629 8.01029 4.67279 7.90769L6.26462 2.46454L7.85642 7.90769C7.34295 8.06194 6.82946 8.11324 6.26462 8.11324Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="1.99%"
                  bottom="0.85%"
                  left="0%"
                  right="87.8%"
                  {...getOverrideProps(overrides, "Vector_7")}
                ></Icon>
                <Icon
                  width="12.53px"
                  height="12.48px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 12.529296875,
                    height: 12.4775390625,
                  }}
                  paths={[
                    {
                      d: "M8.21619 0L4.36477 0L0 12.4777L3.33771 12.4777L3.95402 10.3726C4.67293 10.5778 5.49444 10.732 6.26466 10.732C7.08653 10.732 7.85674 10.6291 8.57565 10.3726L9.19161 12.4777L12.5293 12.4777L8.21619 0ZM6.26466 8.11323C5.7 8.11323 5.18664 8.01028 4.67293 7.90768L6.26466 2.46453L7.85674 7.90768C7.34303 8.06194 6.82967 8.11323 6.26466 8.11323Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="2%"
                  bottom="0.84%"
                  left="31.5%"
                  right="56.3%"
                  {...getOverrideProps(overrides, "Vector_8")}
                ></Icon>
                <Icon
                  width="12.53px"
                  height="12.48px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 12.52880859375,
                    height: 12.4775390625,
                  }}
                  paths={[
                    {
                      d: "M8.21584 0L4.36478 0L0 12.4777L3.33771 12.4777L3.95366 10.3726C4.67258 10.5778 5.49445 10.732 6.26466 10.732C7.08617 10.732 7.85638 10.6291 8.5753 10.3726L9.19126 12.4777L12.529 12.4777L8.21584 0ZM6.31596 8.11323C5.75095 8.11323 5.23759 8.01028 4.72388 7.90768L6.31596 2.46453L7.90769 7.90768C7.39433 8.06194 6.88062 8.11323 6.31596 8.11323Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="2%"
                  bottom="0.84%"
                  left="75.1%"
                  right="12.7%"
                  {...getOverrideProps(overrides, "Vector_9")}
                ></Icon>
              </View>
              <View
                padding="0px 0px 0px 0px"
                width="93.52px"
                height="93.4px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="18.07%"
                left="4.48%"
                right="4.45%"
                {...getOverrideProps(overrides, "Group_5")}
              >
                <Icon
                  width="39.54px"
                  height="50.6px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 39.5400390625,
                    height: 50.5986328125,
                  }}
                  paths={[
                    {
                      d: "M26.8713 0.78976C26.3579 0.224747 25.639 -0.0830523 24.9201 0.0195477C24.3038 0.122148 23.7391 0.584202 23.4823 1.14921L0.221069 47.6716C-0.29243 48.6986 0.118362 49.8796 1.14536 50.3929C1.45344 50.5472 1.76153 50.5985 2.06961 50.5985L34.4712 50.5985C35.2414 50.5985 35.9603 50.1877 36.2684 49.4688C43.0978 35.3991 38.8872 13.5756 26.8713 0.78976Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="45.83%"
                  bottom="0%"
                  left="0%"
                  right="57.72%"
                  {...getOverrideProps(overrides, "Vector_10")}
                ></Icon>
                <Icon
                  width="58.2px"
                  height="93.4px"
                  viewBox={{
                    minX: 0,
                    minY: 0,
                    width: 58.20068359375,
                    height: 93.404296875,
                  }}
                  paths={[
                    {
                      d: "M57.9437 90.4775C57.5329 89.6043 14.3483 3.235 13.2699 1.07833C12.9618 0.462142 12.3968 0.0513492 11.7295 0L11.6778 0C10.9076 0.0513492 10.2404 0.462142 9.82926 1.12968C-1.87818 19.6667 -3.21341 42.055 6.28636 61.0028L21.8965 92.2744C22.256 92.9934 22.9236 93.4041 23.7451 93.4041L56.1464 93.4041C57.2761 93.4041 58.2005 92.48 58.2005 91.3503C58.1492 91.0422 58.0976 90.734 57.9437 90.4775Z",
                      fill: "rgba(255,255,255,1)",
                      fillRule: "nonzero",
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="37.77%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector_11")}
                ></Icon>
              </View>
            </View>
          </View>
        </View>
        <Text
          fontFamily="Inter"
          fontSize="48px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="72px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="148px"
          left="calc(50% - 230.5px - 0.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Profile and visibility"
          {...getOverrideProps(overrides, "Profile and visibility")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="760.05px"
          height="205.73px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="299px"
          left="calc(50% - 380.02px - 529.98px)"
          {...getOverrideProps(overrides, "image_group")}
        >
          <Card
            width="760.05px"
            height="205.73px"
            position="absolute"
            backgroundColor="rgba(230, 230, 230, 1)"
            top="0px"
            left="calc(50% - 380.02px - 0px)"
            variation="elevated"
            {...getOverrideProps(overrides, "done_card179642365")}
          ></Card>
          <Image
            width="116.2px"
            height="120.96px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="41.91px"
            left="calc(50% - 58.1px - -264.78px)"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src={user?.ImageProfile}
            {...getOverrideProps(overrides, "profile_icon_image")}
          ></Image>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="751.49px"
          height="174.59px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="804.7px"
          left="calc(50% - 375.74px - 527.64px)"
          {...getOverrideProps(overrides, "options_group")}
        >
          <Button
            width="750.55px"
            height="58.29px"
            position="absolute"
            top="33.39%"
            bottom="33.22%"
            left="0.13%"
            right="0%"
            backgroundColor={
              deleteUnderScoreaccountUnderScorebuttonBackgroundColor
            }
            size="default"
            isDisabled={false}
            variation="link"
            fontSize={20}
            color="white"
            children="Delete account"
            onMouseOver={() => {
              deleteUnderScoreaccountUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              deleteUnderScoreaccountUnderScorebuttonOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "delete_account_button")}
          ></Button>
          <Button
            width="750.55px"
            height="58.29px"
            position="absolute"
            top="0%"
            bottom="66.61%"
            left="0%"
            right="0.13%"
            backgroundColor={
              changeUnderScorepasswordUnderScorebuttonBackgroundColor
            }
            size="default"
            isDisabled={false}
            variation="link"
            color="white"
            fontSize={20}
            children="Change password"
            onMouseOver={() => {
              changeUnderScorepasswordUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              changeUnderScorepasswordUnderScorebuttonOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "change_password_button")}
          ></Button>
          <Button
            width="750.55px"
            height="58.29px"
            position="absolute"
            top="66.61%"
            bottom="0%"
            left="0.05%"
            right="0.07%"
            backgroundColor={
              switchUnderScoremnotesUnderScorebuttonBackgroundColor
            }
            size="default"
            isDisabled={false}
            variation="link"
            fontSize={20}
            color="white"
            children="Add & remove users"
            onMouseOver={() => {
              switchUnderScoremnotesUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              switchUnderScoremnotesUnderScorebuttonOnMouseLeave();
            }}
            onClick={() => {
              switchUnderScoremnotesUnderScorebuttonOnClick();
            }}
            {...getOverrideProps(overrides, "switch_mnotes_button")}
          ></Button>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="761px"
          height="205.73px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="562.78px"
          left="calc(50% - 380.5px - 530.5px)"
          {...getOverrideProps(overrides, "email_group")}
        >
          <Card
            width="760.05px"
            height="205.73px"
            position="absolute"
            backgroundColor="rgba(230, 230, 230, 1)"
            top="0px"
            left="calc(50% - 380.02px - -0.48px)"
            variation="elevated"
            {...getOverrideProps(overrides, "done_card179692275")}
          ></Card>
          <Button
            width="760.05px"
            height="51.43px"
            position="absolute"
            top="154.3px"
            left="calc(50% - 380.02px - 0.48px)"
            backgroundColor={saveUnderScoreemailUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="link"
            children="Save"
            onMouseLeave={() => {
              saveUnderScoreemailUnderScorebuttonOnMouseLeave();
            }}
            onMouseOver={() => {
              saveUnderScoreemailUnderScorebuttonOnMouseOver();
            }}
            {...getOverrideProps(overrides, "save_email_button")}
          ></Button>
        </View>
        <TextField
          width="350px"
          height="40px"
          position="absolute"
          top="634px"
          left="calc(50% - 175px - 457px)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(255,255,255,1)"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          {...getOverrideProps(overrides, "email_text_field")}
        ></TextField>
        <Text
          fontFamily="Inter"
          fontSize="26px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="39px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="121px"
          height="37px"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="634px"
          left="166px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Email:"
          {...getOverrideProps(overrides, "Email:")}
        ></Text>
        <Button
          width="519px"
          height="59px"
          position="absolute"
          top="926px"
          left="calc(50% - 258.5px - -518.5px)"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor="rgba(183,201,252,1)"
          size="default"
          isDisabled={false}
          variation="default"
          children="Clear all activity"
          {...getOverrideProps(overrides, "clear_activity_button")}
        ></Button>
      </View>
    </View>
  );
}
