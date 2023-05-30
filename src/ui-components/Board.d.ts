/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { User } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { AlertProps, BadgeProps, ButtonProps, CardProps, DividerProps, FlexProps, IconProps, ImageProps, RatingProps, SearchFieldProps, SelectFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BoardOverridesProps = {
    Board?: PrimitiveOverrideProps<ViewProps>;
    Frame?: PrimitiveOverrideProps<ViewProps>;
    footer_rectangle?: PrimitiveOverrideProps<ViewProps>;
    search_ticket_select_field?: PrimitiveOverrideProps<SearchFieldProps>;
    amplify_logo?: PrimitiveOverrideProps<ViewProps>;
    aws_image_background_notes?: PrimitiveOverrideProps<ImageProps>;
    create_ticket_button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 3"?: PrimitiveOverrideProps<FlexProps>;
    reminder_icon_image?: PrimitiveOverrideProps<ImageProps>;
    help_icon_image?: PrimitiveOverrideProps<ImageProps>;
    settings_icon_image?: PrimitiveOverrideProps<ImageProps>;
    profile_icon_image?: PrimitiveOverrideProps<ImageProps>;
    "logo 1"?: PrimitiveOverrideProps<ImageProps>;
    KAI?: PrimitiveOverrideProps<TextProps>;
    "Your work group178522270"?: PrimitiveOverrideProps<ViewProps>;
    "Your work"?: PrimitiveOverrideProps<TextProps>;
    your_work_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    "Your work group178522279"?: PrimitiveOverrideProps<ViewProps>;
    Projects?: PrimitiveOverrideProps<TextProps>;
    projects_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    "Your work group178522290"?: PrimitiveOverrideProps<ViewProps>;
    "Issue Templates"?: PrimitiveOverrideProps<TextProps>;
    issue_templates_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    todo_card?: PrimitiveOverrideProps<CardProps>;
    in_progress_card?: PrimitiveOverrideProps<CardProps>;
    in_review_card?: PrimitiveOverrideProps<CardProps>;
    done_card?: PrimitiveOverrideProps<CardProps>;
    aws_image_background?: PrimitiveOverrideProps<ImageProps>;
    Badge178502026?: PrimitiveOverrideProps<BadgeProps>;
    Badge178532415?: PrimitiveOverrideProps<BadgeProps>;
    Badge178532419?: PrimitiveOverrideProps<BadgeProps>;
    Badge178532423?: PrimitiveOverrideProps<BadgeProps>;
    "logo-gradient-blue-jira"?: PrimitiveOverrideProps<ViewProps>;
    Jira?: PrimitiveOverrideProps<ViewProps>;
    Vector178562483?: PrimitiveOverrideProps<IconProps>;
    Vector178562484?: PrimitiveOverrideProps<IconProps>;
    Vector178562485?: PrimitiveOverrideProps<IconProps>;
    Vector178562486?: PrimitiveOverrideProps<IconProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector178562488?: PrimitiveOverrideProps<IconProps>;
    Vector_2?: PrimitiveOverrideProps<IconProps>;
    Vector_3?: PrimitiveOverrideProps<IconProps>;
    "Your work group178532301"?: PrimitiveOverrideProps<ViewProps>;
    Teams?: PrimitiveOverrideProps<TextProps>;
    teams_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    profile_select_field?: PrimitiveOverrideProps<SelectFieldProps>;
    Card?: PrimitiveOverrideProps<CardProps>;
    project_name_text?: PrimitiveOverrideProps<TextProps>;
    "Software project"?: PrimitiveOverrideProps<TextProps>;
    project_image_name?: PrimitiveOverrideProps<ImageProps>;
    Feedback?: PrimitiveOverrideProps<ViewProps>;
    feedback_text?: PrimitiveOverrideProps<BadgeProps>;
    Rating?: PrimitiveOverrideProps<RatingProps>;
    Divider180442991?: PrimitiveOverrideProps<DividerProps>;
    Divider180442992?: PrimitiveOverrideProps<DividerProps>;
    roadmap_button?: PrimitiveOverrideProps<ButtonProps>;
    backlog_button?: PrimitiveOverrideProps<ButtonProps>;
    active_sprints_button?: PrimitiveOverrideProps<ButtonProps>;
    issues_button?: PrimitiveOverrideProps<ButtonProps>;
    team_calendar_button?: PrimitiveOverrideProps<ButtonProps>;
    success_alert?: PrimitiveOverrideProps<AlertProps>;
} & EscapeHatchProps;
export declare type BoardProps = React.PropsWithChildren<Partial<ViewProps> & {
    user?: User;
} & {
    overrides?: BoardOverridesProps | undefined | null;
}>;
export default function Board(props: BoardProps): React.ReactElement;
