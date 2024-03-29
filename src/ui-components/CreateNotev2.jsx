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
  Card,
  Divider,
  Flex,
  Icon,
  Image,
  SearchField,
  SelectField,
  Text,
  TextAreaField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function CreateNotev2(props) {
  const { NoteTitle, overrides, ...rest } = props;
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
    clearUnderScorebuttonBackgroundColor,
    setClearUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,153,0,1)");
  const [
    submitUnderScorebuttonBackgroundColor,
    setSubmitUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,153,0,1)");
  const [
    cancelUnderScorebuttonBackgroundColor,
    setCancelUnderScorebuttonBackgroundColor,
  ] = useStateMutationAction("rgba(255,153,0,1)");
  const [openaiDescButtonBackgroundColor, setOpenaiDescButtonBackgroundColor] =
    useStateMutationAction(undefined);
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
  const taskUnderScorebuttonOnMouseLeave = () => {
    setTaskUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const taskUnderScorebuttonOnMouseOver = () => {
    setTaskUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
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
  const binUnderScorebuttonOnMouseLeave = () => {
    setBinUnderScorebuttonBackgroundColor("rgba(35, 47, 62, 1)");
  };
  const binUnderScorebuttonOnMouseOver = () => {
    setBinUnderScorebuttonBackgroundColor("rgba(145, 151, 158, 1)");
  };
  const clearUnderScorebuttonOnMouseLeave = () => {
    setClearUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const clearUnderScorebuttonOnMouseOver = () => {
    setClearUnderScorebuttonBackgroundColor("rgba(188, 116, 9, 1)");
  };
  const submitUnderScorebuttonOnMouseOver = () => {
    setSubmitUnderScorebuttonBackgroundColor("rgba(188, 116, 9, 1)");
  };
  const submitUnderScorebuttonOnMouseLeave = () => {
    setSubmitUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const cancelUnderScorebuttonOnMouseLeave = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(255, 153, 0, 1)");
  };
  const cancelUnderScorebuttonOnMouseOver = () => {
    setCancelUnderScorebuttonBackgroundColor("rgba(188, 116, 9, 1)");
  };
  const openaiDescButtonOnMouseOver = () => {
    setOpenaiDescButtonBackgroundColor("rgba(76, 198, 185, 1)");
  };
  const openaiDescButtonOnMouseLeave = () => {
    setOpenaiDescButtonBackgroundColor("white");
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
      {...getOverrideProps(overrides, "CreateNotev2")}
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
        top="-1px"
        left="-10px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Divider
          width="1337px"
          height="4px"
          position="absolute"
          top="175px"
          left="4px"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider176021467")}
        ></Divider>
        <View
          width="1916px"
          height="171px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="4px"
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
          top="36px"
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
            {...getOverrideProps(overrides, "powered_by_amplify_text176021471")}
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
            {...getOverrideProps(overrides, "powered_by_amplify_text176021472")}
          ></Text>
        </View>
        <SearchField
          width="622px"
          height="unset"
          placeholder="Search note"
          position="absolute"
          top="34px"
          left="calc(50% - 311px - 0px)"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <View
          padding="0px 0px 0px 0px"
          width="681px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="105px"
          left="calc(50% - 340.5px - 0.5px)"
          {...getOverrideProps(overrides, "task_bar_button")}
        >
          <Button
            width="150px"
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
            width="150px"
            height="unset"
            position="absolute"
            top="0px"
            left="354px"
            backgroundColor={taskUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="primary"
            children="Task"
            onClick={() => {
              taskUnderScorebuttonOnClick();
            }}
            onMouseLeave={() => {
              taskUnderScorebuttonOnMouseLeave();
            }}
            onMouseOver={() => {
              taskUnderScorebuttonOnMouseOver();
            }}
            {...getOverrideProps(overrides, "task_button")}
          ></Button>
          <Button
            width="150px"
            height="unset"
            position="absolute"
            top="0px"
            left="177px"
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
            width="150px"
            height="unset"
            position="absolute"
            top="0px"
            left="531px"
            backgroundColor={binUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="primary"
            children="Bin"
            onClick={() => {
              binUnderScorebuttonOnClick();
            }}
            onMouseLeave={() => {
              binUnderScorebuttonOnMouseLeave();
            }}
            onMouseOver={() => {
              binUnderScorebuttonOnMouseOver();
            }}
            {...getOverrideProps(overrides, "bin_button")}
          ></Button>
        </View>
        <Button
          width="150px"
          height="unset"
          position="absolute"
          top="36px"
          left="1563px"
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
        <Divider
          width="1316px"
          height="2px"
          position="absolute"
          top="854px"
          left="17px"
          backgroundColor="rgba(0,0,0,1)"
          size="small"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider176021485")}
        ></Divider>
        <Badge
          width="898px"
          height="30px"
          position="absolute"
          top="1025px"
          left="calc(50% - 449px - 0px)"
          size="default"
          variation="default"
          children="AWS Amplify Studio is supported by Amazon Web Services © 2023, Amazon Web Services, Inc. and its affiliates. All rights reserved. View the site terms and privacy policy ."
          {...getOverrideProps(overrides, "copyright_text")}
        ></Badge>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          overflow="hidden"
          position="absolute"
          top="74px"
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
                {...getOverrideProps(overrides, "Vector176021491")}
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
                  height: 16.666671752929688,
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
                {...getOverrideProps(overrides, "Vector176021493")}
              ></Icon>
              <Icon
                width="16.64px"
                height="23.02px"
                viewBox={{
                  minX: 0,
                  minY: 0,
                  width: 16.642578125,
                  height: 23.015838623046875,
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
                {...getOverrideProps(overrides, "Vector176021494")}
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
                {...getOverrideProps(overrides, "Vector176021495")}
              ></Icon>
            </View>
          </Flex>
        </Flex>
        <SelectField
          width="175px"
          height="47px"
          placeholder="My account"
          position="absolute"
          top="36px"
          left="1722px"
          backgroundColor="rgba(35,47,62,1)"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SelectField")}
        ></SelectField>
        <Image
          width="1916px"
          height="851px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="166px"
          left="4px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://dqqb8jb1p8fmj.cloudfront.net/AiqBuyerFrontend/bg-silver-01@2x.b626e5f906ef4637bd304f3297a2a4ab.png"
          {...getOverrideProps(overrides, "bg-silver-01@2x 1")}
        ></Image>
        <Divider
          width="300px"
          position="absolute"
          top="711px"
          left="617px"
          size="large"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider177841685")}
        ></Divider>
        <View
          padding="0px 0px 0px 0px"
          width="756px"
          height="649px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="312px"
          left="calc(50% - 378px - 0px)"
          {...getOverrideProps(overrides, "createForm")}
        >
          <Text
            fontFamily="Inter"
            fontSize="40px"
            fontWeight="700"
            color="rgba(255,255,255,1)"
            lineHeight="60px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            position="absolute"
            top="0px"
            left="269px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="Create Note"
            {...getOverrideProps(overrides, "Create Note")}
          ></Text>
          <Divider
            width="756px"
            height="1px"
            position="absolute"
            top="77px"
            left="0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divider176231440")}
          ></Divider>
          <Card
            width="756px"
            height="561px"
            position="absolute"
            padding="13px 13px 13px 13px"
            top="88px"
            left="0px"
            border="3px SOLID rgba(255,153,0,1)"
            variation="elevated"
            {...getOverrideProps(overrides, "Card")}
          ></Card>
          <TextField
            width="300px"
            height="72px"
            label="Title"
            placeholder="Title"
            position="absolute"
            top="111px"
            left="50px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "title_text_field")}
          ></TextField>
          <TextAreaField
            width="647px"
            height="138px"
            label="Description"
            placeholder="Description"
            position="absolute"
            top="251px"
            left="50px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "description_text_field")}
          ></TextAreaField>
          <TextField
            width="300px"
            height="82px"
            label="Reminder"
            placeholder="mm/dd/yyy"
            position="absolute"
            top="414px"
            left="41px"
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "reminder_text_field")}
          ></TextField>
          <SelectField
            width="300px"
            height="unset"
            label="Priority"
            position="absolute"
            top="113px"
            left="393px"
            placeholder=""
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "priority_select_field")}
          ></SelectField>
          <Button
            width="313px"
            height="79px"
            position="absolute"
            border="3px SOLID rgba(255,153,0,1)"
            borderRadius="7px"
            top="538px"
            left="calc(50% - 153.5px - 186.5px)"
            backgroundColor={clearUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="default"
            color="white"
            children="Clear"
            onMouseLeave={() => {
              clearUnderScorebuttonOnMouseLeave();
            }}
            onMouseOver={() => {
              clearUnderScorebuttonOnMouseOver();
            }}
            {...getOverrideProps(overrides, "clear_button")}
          ></Button>
          <Button
            width="303px"
            height="80px"
            position="absolute"
            border="3px SOLID rgba(255,153,0,1)"
            borderRadius="7px"
            top="537px"
            left="calc(50% - 148.5px - -167.5px)"
            backgroundColor={submitUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="default"
            color="white"
            children="Submit"
            onMouseOver={() => {
              submitUnderScorebuttonOnMouseOver();
            }}
            onMouseLeave={() => {
              submitUnderScorebuttonOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "submit_button")}
          ></Button>
          <Button
            width="303px"
            height="77px"
            position="absolute"
            border="3px SOLID rgba(255,153,0,1)"
            borderRadius="7px"
            top="431px"
            left="calc(50% - 148.5px - -166.5px)"
            backgroundColor={cancelUnderScorebuttonBackgroundColor}
            size="default"
            isDisabled={false}
            variation="default"
            color="white"
            children="Cancel"
            onMouseLeave={() => {
              cancelUnderScorebuttonOnMouseLeave();
            }}
            onMouseOver={() => {
              cancelUnderScorebuttonOnMouseOver();
            }}
            {...getOverrideProps(overrides, "cancel_button")}
          ></Button>
          <Image
            width="89px"
            height="70px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="293px"
            left="604px"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2023%2F02%2FChatGPT-Emblem.png&f=1&nofb=1&ipt=ee7da17fad52c756b997b9fd82dc28a4a7d3f19a89b497187edc55684bf225e4&ipo=images"
            backgroundColor={openaiDescButtonBackgroundColor}
            onMouseOver={() => {
              openaiDescButtonOnMouseOver();
            }}
            onMouseLeave={() => {
              openaiDescButtonOnMouseLeave();
            }}
            {...getOverrideProps(overrides, "openaiDescButton")}
          ></Image>
        </View>
        <Alert
          width="1902px"
          height="146px"
          heading="Error"
          position="absolute"
          top="166px"
          left="18px"
          boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
          variation="error"
          isDismissible={true}
          hasIcon={true}
          children="Description"
          {...getOverrideProps(overrides, "error_alert")}
        ></Alert>
      </View>
    </View>
  );
}
