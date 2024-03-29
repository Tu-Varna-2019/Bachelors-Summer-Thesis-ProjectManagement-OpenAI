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
  Alert,
  Badge,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Rating,
  SearchField,
  SelectField,
  SwitchField,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function HomeV2(props) {
  const { noteV2, overrides, ...rest } = props;
  const [
    createUnderScorenoteUnderScorebuttonBackgroundColor,
    setCreateUnderScorenoteUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,153,0,1)");
  const [
    noteUnderScorebuttonBackgroundColor,
    setNoteUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    taskUnderScorebuttonBackgroundColor,
    setTaskUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    reminderUnderScorebuttonBackgroundColor,
    setReminderUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    binUnderScorebuttonBackgroundColor,
    setBinUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(35,47,62,1)");
  const [
    submitUnderScorebuttonBackgroundColor,
    setSubmitUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,153,0,1)");
  const [imageNoteBackgroundColor, setImageNoteBackgroundColor] =
    useStateMutationAction(undefined);
  const createUnderScorenoteUnderScorebuttonOnMouseLeave = () => {
    setCreateUnderScorenoteUnderScorebuttonBackgroundColor(
      "rgba(255, 153, 0, 1)"
    );
  };
  const createUnderScorenoteUnderScorebuttonOnMouseOver = () => {
    setCreateUnderScorenoteUnderScorebuttonBackgroundColor(
      "rgba(188, 116, 9, 1)"
    );
  };
  const createUnderScorenoteUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/create-note",
  });
  const noteUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/note",
  });
  const noteUnderScorebuttonOnMouseOver = () => {
    setNoteUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const noteUnderScorebuttonOnMouseLeave = () => {
    setNoteUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const taskUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/task",
  });
  const taskUnderScorebuttonOnMouseOver = () => {
    setTaskUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const taskUnderScorebuttonOnMouseLeave = () => {
    setTaskUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const reminderUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/reminder",
  });
  const reminderUnderScorebuttonOnMouseOver = () => {
    setReminderUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const reminderUnderScorebuttonOnMouseLeave = () => {
    setReminderUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const binUnderScorebuttonOnClick = useNavigateAction({
    type: "url",
    url: "/bin",
  });
  const binUnderScorebuttonOnMouseOver = () => {
    setBinUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const binUnderScorebuttonOnMouseLeave = () => {
    setBinUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const submitUnderScorebuttonOnMouseLeave = () => {
    setSubmitUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const submitUnderScorebuttonOnMouseOver = () => {
    setSubmitUnderScorebuttonBackgroundColor("rgba(188, 116, 9, 1)");
  };
  const imageNoteOnMouseOver = () => {
    setImageNoteBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const imageNoteOnMouseLeave = () => {
    setImageNoteBackgroundColor("white");
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
      {...getOverrideProps(overrides, "HomeV2")}
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
        <Divider
          width="1916px"
          height="4px"
          position="absolute"
          top="175px"
          left="4px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider177411804")}
        ></Divider>
        <Divider
          width="1920px"
          height="16px"
          position="absolute"
          top="340px"
          left="0px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider177411805")}
        ></Divider>
        <View
          width="1921px"
          height="171px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="-1px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(35,47,62,1)"
          {...getOverrideProps(overrides, "footer_rectangle")}
        ></View>
        <View
          padding="0px 0px 0px 0px"
          width="112px"
          height="108px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="29px"
          left="69px"
          {...getOverrideProps(overrides, "components_footer")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="100px"
            height="26px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="6px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Created by "
            {...getOverrideProps(overrides, "powered_by_amplify_text177411808")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="112px"
            height="29px"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="79px"
            left="0px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="AWS Amplify"
            {...getOverrideProps(overrides, "powered_by_amplify_text177411809")}
          ></Text>
        </View>
        <SearchField
          width="727px"
          height="unset"
          placeholder="Search note"
          position="absolute"
          top="39px"
          left="calc(50% - 363.5px - 0.5px)"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Button
          width="150px"
          height="unset"
          position="absolute"
          top="33px"
          left="1561px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Contact us"
          {...getOverrideProps(overrides, "contact_us_button")}
        ></Button>
        <View
          width="48px"
          height="38px"
          {...getOverrideProps(overrides, "amplify_logo")}
        ></View>
        <Image
          width="1921px"
          height="187px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="171px"
          left="-1px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://d1.awsstatic.com/aws-media-series-assets/Site-Merch_AWS-Back-to-Basics_Vid-Series_Hero-BG.c12b4f1f0099e91cbf1dd0b7efbdf53e8e6a8f84.png"
          {...getOverrideProps(overrides, "aws_image_background")}
        ></Image>
        <View
          padding="0px 0px 0px 0px"
          width="248px"
          height="57.02px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="266px"
          left="calc(50% - 124px - 0px)"
          {...getOverrideProps(overrides, "Feedback")}
        >
          <Badge
            width="unset"
            height="33px"
            position="absolute"
            top="0px"
            left="0px"
            size="default"
            variation="default"
            children="We’d love to hear your feedback !"
            {...getOverrideProps(overrides, "feedback_text")}
          ></Badge>
          <Rating
            width="unset"
            height="15.02px"
            position="absolute"
            top="42px"
            left="28px"
            size="default"
            {...getOverrideProps(overrides, "Rating")}
          ></Rating>
        </View>
        <Image
          width="1916px"
          height="723px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="358px"
          left="4px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://eu-west-1.signin.aws/assets/static/img/signin-background.png"
          {...getOverrideProps(overrides, "aws_image_background_notes")}
        ></Image>
        <Divider
          width="1888px"
          height="2px"
          position="absolute"
          top="1021px"
          left="4px"
          backgroundColor="rgba(0,0,0,1)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "divider_consent_text")}
        ></Divider>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          position="absolute"
          top="67px"
          left="100px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "amplify-logo.677fad72 1")}
        >
          <Flex
            padding="0px 0px 0px 0px"
            width="36.35px"
            height="25px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Clip path group")}
          >
            <View
              padding="0px 0px 0px 0px"
              width="36.35px"
              height="25px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "clip0")}
            >
              <Icon
                width="36.35px"
                height="25px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 36.35107421875,
                  height: 25,
                }}
                paths={[
                  {
                    d: "M36.3508 0L0 0L0 25L36.3508 25L36.3508 0Z",
                    fill: "rgba(0,0,0,1)",
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
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector177411826")}
              ></Icon>
            </View>
            <View
              padding="0px 0px 0px 0px"
              width="36.35px"
              height="25px"
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
              <Icon
                width="21.02px"
                height="16.67px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 21.0224609375,
                  height: 16.66668701171875,
                }}
                paths={[
                  {
                    d: "M7.40773 4.91926L0 16.6667L21.0222 16.6667L18.368 12.4578L7.98281 12.4578L13.1773 4.22649L10.5121 0L7.40773 4.91926Z",
                    fill: "rgba(255,153,0,1)",
                    fillRule: "evenodd",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="33.33%"
                bottom="0.01%"
                left="0%"
                right="42.17%"
                {...getOverrideProps(overrides, "Vector177411828")}
              ></Icon>
              <Icon
                width="16.64px"
                height="23.02px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.642578125,
                  height: 23.015869140625,
                }}
                paths={[
                  {
                    d: "M0 4.06973L11.6339 23.0158L16.6426 23.0158L2.49916 0L0 4.06973Z",
                    fill: "rgba(255,153,0,1)",
                    fillRule: "evenodd",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="7.94%"
                bottom="0%"
                left="32.53%"
                right="21.69%"
                {...getOverrideProps(overrides, "Vector177411829")}
              ></Icon>
              <Icon
                width="21.02px"
                height="25px"
                viewBox={{ minX: 0, minY: 0, width: 21.0224609375, height: 25 }}
                paths={[
                  {
                    d: "M0 0L15.8942 25L21.0222 25L5.12158 0L0 0Z",
                    fill: "rgba(255,153,0,1)",
                    fillRule: "evenodd",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="42.17%"
                right="0%"
                {...getOverrideProps(overrides, "Vector177411830")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <Badge
          width="326px"
          height="40px"
          position="absolute"
          backgroundColor="rgba(255,153,0,1)"
          top="213px"
          left="calc(50% - 163px - 0px)"
          size="default"
          variation="default"
          children="Welcome back"
          {...getOverrideProps(overrides, "Badge")}
        ></Badge>
        <SelectField
          width="175px"
          height="40px"
          label="My account"
          placeholder="My account"
          position="absolute"
          top="33px"
          left="1727px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "my_account_select_field")}
        ></SelectField>
        <Divider
          width="565.2px"
          height="3.99px"
          position="absolute"
          top="994.2px"
          left="697px"
          transformOrigin="top left"
          transform="rotate(-89.87deg)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "divider_notes_info")}
        ></Divider>
        <Button
          width="207px"
          height="84px"
          position="absolute"
          border="1px SOLID rgba(35,47,62,1)"
          top="217px"
          left="1234px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          backgroundColor={createUnderScorenoteUnderScorebuttonBackgroundColor}
          size="default"
          isDisabled={false}
          variation="default"
          children="Create"
          onMouseLeave={() => {
            createUnderScorenoteUnderScorebuttonOnMouseLeave();
          }}
          onMouseOver={() => {
            createUnderScorenoteUnderScorebuttonOnMouseOver();
          }}
          onClick={() => {
            createUnderScorenoteUnderScorebuttonOnClick();
          }}
          {...getOverrideProps(overrides, "create_note_button")}
        ></Button>
        <Alert
          width="1938px"
          height="187px"
          heading="Success"
          position="absolute"
          top="171px"
          left="-18px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          variation="success"
          isDismissible={true}
          hasIcon={true}
          children="Description"
          {...getOverrideProps(overrides, "success_alert")}
        ></Alert>
        <Text
          fontFamily="Inter"
          fontSize="40px"
          fontWeight="700"
          color="rgba(104,112,120,1)"
          lineHeight="48.409088134765625px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="662px"
          left="calc(50% - 376.5px - 0.5px)"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Notes you've added are displayed here"
          {...getOverrideProps(overrides, "notes_displayed_here_no_note")}
        ></Text>
        <Image
          width="262px"
          height="168px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="471px"
          left="calc(50% - 131px - 0px)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          {...getOverrideProps(overrides, "amplify_image_logo_no_note")}
        ></Image>
        <View
          padding="0px 0px 0px 0px"
          width="739px"
          height="43px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="116px"
          left="calc(50% - 369.5px - 0.5px)"
          {...getOverrideProps(overrides, "note_task_button")}
        >
          <Button
            width="163px"
            height="unset"
            position="absolute"
            top="0px"
            left="0px"
            backgroundColor={noteUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="primary"
            children="Note"
            onClick={() => {
              noteUnderScorebuttonOnClick();
            }}
            onMouseOver={() => {
              noteUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              noteUnderScorebuttonOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "note_button")}
          ></Button>
          <Button
            width="163px"
            height="unset"
            position="absolute"
            top="0px"
            left="384px"
            backgroundColor={taskUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="primary"
            children="Task"
            onClick={() => {
              taskUnderScorebuttonOnClick();
            }}
            onMouseOver={() => {
              taskUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              taskUnderScorebuttonOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "task_button")}
          ></Button>
          <Button
            width="163px"
            height="unset"
            position="absolute"
            top="0px"
            left="192px"
            backgroundColor={reminderUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="primary"
            children="Reminder"
            onClick={() => {
              reminderUnderScorebuttonOnClick();
            }}
            onMouseOver={() => {
              reminderUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              reminderUnderScorebuttonOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "reminder_button")}
          ></Button>
          <Button
            width="163px"
            height="unset"
            position="absolute"
            top="0px"
            left="576px"
            backgroundColor={binUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="primary"
            children="Bin"
            onClick={() => {
              binUnderScorebuttonOnClick();
            }}
            onMouseOver={() => {
              binUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              binUnderScorebuttonOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "bin_button")}
          ></Button>
          <Divider
            width="109px"
            position="absolute"
            top="40px"
            left="29px"
            boxShadow="0px 16px 24px rgba(0, 0, 0, 0.14000000059604645)"
            size="large"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider177411844")}
          ></Divider>
        </View>
        <Badge
          width="898px"
          height="unset"
          position="absolute"
          top="1039px"
          left="calc(50% - 449px - 0px)"
          size="default"
          variation="default"
          children="AWS Amplify Studio is supported by Amazon Web Services © 2023, Amazon Web Services, Inc. and its affiliates. All rights reserved. View the site terms and privacy policy ."
          {...getOverrideProps(overrides, "copyright_text")}
        ></Badge>
        <View
          padding="0px 0px 0px 0px"
          width="597px"
          height="504px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="488px"
          left="56px"
          {...getOverrideProps(overrides, "note_edit_group")}
        >
          <TextField
            width="596px"
            height="unset"
            label="Title"
            placeholder="Title"
            position="absolute"
            top="0px"
            left="1px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "title_text_field")}
          ></TextField>
          <SelectField
            width="268px"
            height="unset"
            label="Priority"
            position="absolute"
            top="276px"
            left="323px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "priority_select_field")}
          ></SelectField>
          <Button
            width="592px"
            height="56px"
            position="absolute"
            border="1px SOLID rgba(35,47,62,1)"
            top="449px"
            left="2px"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            backgroundColor={submitUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="default"
            children="Save"
            onMouseLeave={() => {
              submitUnderScorebuttonOnMouseLeave();
            }}
            onMouseOver={() => {
              submitUnderScorebuttonOnMouseOver();
            }}
            {...getOverrideProps(overrides, "submit_button")}
          ></Button>
          <TextField
            width="276px"
            height="unset"
            label="Reminder"
            placeholder="mm/dd/yyy"
            position="absolute"
            top="276px"
            left="0px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "reminder_text_field")}
          ></TextField>
          <SwitchField
            width="unset"
            height="unset"
            label="Delete"
            position="absolute"
            top="385px"
            left="487px"
            size="default"
            defaultChecked={false}
            isDisabled={false}
            labelPosition="start"
            {...getOverrideProps(overrides, "deleted_switch_field")}
          ></SwitchField>
          <TextAreaField
            width="596px"
            height="unset"
            label="Description"
            placeholder="Description"
            position="absolute"
            top="113px"
            left="1px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "description_text_field")}
          ></TextAreaField>
          <Image
            width="47px"
            height="47px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="378px"
            left="4px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkit.com%2Fpng%2Ffull%2F301-3018544_icon-user-conference-people-icon-png-orange.png&f=1&nofb=1&ipt=4950a9d8aab21071e87cbe1f56944ae9b824e335017347f28de6e4db3f705e86&ipo=images"
            {...getOverrideProps(overrides, "shareIcon")}
          ></Image>
        </View>
        <Alert
          width="1922px"
          height="187px"
          heading="Info"
          position="absolute"
          top="171px"
          left="-2px"
          variation="info"
          isDismissible={false}
          hasIcon={true}
          children="Description"
          {...getOverrideProps(overrides, "info_alert")}
        ></Alert>
        <Button
          width="176px"
          height="68px"
          position="absolute"
          top="287px"
          left="1744px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Cancel"
          {...getOverrideProps(overrides, "cancel_button")}
        ></Button>
        <Button
          width="174px"
          height="68px"
          position="absolute"
          top="287px"
          left="1570px"
          size="default"
          isDisabled={false}
          variation="link"
          children="Confirm"
          {...getOverrideProps(overrides, "confirm_button")}
        ></Button>
        <TextField
          width="279px"
          height="unset"
          label="Title"
          placeholder="john.doe@hotmail.com"
          position="absolute"
          top="117px"
          left="1613px"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="quiet"
          color="white"
          {...getOverrideProps(overrides, "shareTextField")}
        ></TextField>
        <Image
          width="146px"
          height="124px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="369px"
          left="302px"
          borderRadius="103px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={noteV2?.ImageName}
          backgroundColor={imageNoteBackgroundColor}
          onMouseOver={() => {
            imageNoteOnMouseOver();
          }}
          onMouseLeave={() => {
            imageNoteOnMouseLeave();
          }}
          {...getOverrideProps(overrides, "imageNote")}
        ></Image>
        <Icon
          width="597px"
          height="0px"
          viewBox={{
            minX: 0,
            minY: 0,
            width: 597.00048828125,
            height: 0.5041961669921875,
          }}
          paths={[
            {
              d: "M0 0L597.001 0L597.001 -1L0 -1L0 0Z",
              stroke: "rgba(174,179,183,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="85.83%"
          bottom="14.17%"
          left="3.07%"
          right="65.83%"
          transformOrigin="top left"
          transform="rotate(0.05deg)"
          {...getOverrideProps(overrides, "Line 1")}
        ></Icon>
        <Image
          width="37px"
          height="37px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="418px"
          left="469px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.thehungryjpeg.com%2Fthumbs2%2Fori_3598112_rtvhpiagdzx81ros7b34r5vzavs02h8ohftmd521_camera-icon.jpg&f=1&nofb=1&ipt=e3a9ad7d752626f60e4cc89d9419bf48ded700d706d0d663afa720139934b303&ipo=images"
          {...getOverrideProps(overrides, "camera_image_icon")}
        ></Image>
        <Image
          width="37px"
          height="37px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="418px"
          left="244px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F000%2F649%2F132%2Foriginal%2Fvector-trash-icon-symbol-sign.jpg&f=1&nofb=1&ipt=4219adfc1cfdb64b31afc9b2645d63d0116d48a9ed90b11937d75688dc5ff0fd&ipo=images"
          {...getOverrideProps(overrides, "bin_image_icon")}
        ></Image>
      </View>
    </View>
  );
}
