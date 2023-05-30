import { TicketClass } from '../classes/TicketClass';
import { ProjectClass } from '../classes/ProjectClass';
import { User2Class } from '../classes/User2Class';
import { ToolbarSelectClass } from '../classes/ToolbarSelectbarClass';
import { useNavigate } from 'react-router-dom';
import { getDragDropTicketState } from '../states';


export function BoardFunc (props) {

    const {
        userProfileURL,
        alertVariant,
        alertVisibility,
        alertDescription,
        userSubImageURL,
        currentUser,
    } = User2Class();

    const {
        handleProjectsSelectChange,
        handleYourWorkSelectChange,
        handleTeamsSelectChange,
        handleProfileSelectChange,
        assignedToMe,
    } = ToolbarSelectClass();

    const {
        ticketToDo,
        ticketInProgress,
        ticketInReview,
        ticketDone,
        handleGoToCreateTicketClick,
        handleHoldMoveTicket,
        handleReleaseMoveTicket,
    } = TicketClass();

    const {
        received_project_name,
        imageProjectURL,
    } = ProjectClass();

    const navigate = useNavigate();
    const customOverrideItems = ({ item, index })  => {
        let asignee_image_url = "";
        userSubImageURL.map((data, index) => {
            if (data.sub === item.Asignee)
            asignee_image_url = data.url;});

        return {
            overrides: {
                title_ticket_text:{ children: item.Title },
                epic_link_badge:{ children: item.EpicLink },
                story_points_badge:{children: item.StoryPoint },
                ticket_id_text: {children: "KAI-"+item.TicketID},
                issue_type_image: {src: require(`../images/${item.IssueType}.jpeg`)},
                priority_image: {src: require(`../images/${item.Priority}.jpeg`)},
                asignee_icon_image: {src: asignee_image_url },
                Card: {
                    draggable: "true",
                    onDragStart: () => (handleHoldMoveTicket(item.id))}},
            onClick: () => (
                navigate("/board",{state:{edited:true,selectedTicket:item,project: received_project_name}}))};}

    const BoardTicketToDoOverride={
        TicketToDoCollection:{
            items: ticketToDo}}
    const BoardTicketInProgressOverride={
        TicketInProgressCollection:{
            items:ticketInProgress}}
    const BoardTicketInReviewOverride={
        TicketInReviewCollection:{
            items: ticketInReview}}
    const BoardTicketDoneOverride={
        TicketDoneCollection:{
            items:ticketDone}}

    const BoardComponentOverride = {
        roadmap_button:{
            onClick: (event) => (console.log("yes"))},
        active_sprints_button:{
            onClick: (event) => (console.log("yes2"))},
        project_name_text:{
            children: received_project_name
        },
        project_image_name:{
            src: imageProjectURL,
        },
        profile_icon_image:{
            src: userProfileURL
        },
        success_alert : { 
            style:{"display": alertVisibility },
            children: alertDescription,
            variant: alertVariant,
        },
        projects_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleProjectsSelectChange(event)),
            options:["","switch project"],
        },
        your_work_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleYourWorkSelectChange(event)),
            options: assignedToMe ,
        },
        issue_templates_select_field:{
            style:{color:"transparent"},
            //onChange : (event) => (handleSelectedProjectOnChange(event)),
            options:["","all templates","project templates"],
        },
        profile_select_field: {
            style:{color:"transparent"},
            onChange : (event) => (handleProfileSelectChange(event)),
            options:["",currentUser.username,"Manage account","Log out"],
        },
        teams_select_field:{
            style:{color:"transparent"},
            onChange : (event) => (handleTeamsSelectChange(event)),
            options:["","all users"],
        },
        todo_card:{
            onMouseLeave: () => (handleReleaseMoveTicket(getDragDropTicketState(),"ToDo")),
            // implment when able to change color for todo card coloronDragOver: () => (console.log("drag over")),
        },
        in_progress_card:{
            onMouseLeave: () => (handleReleaseMoveTicket(getDragDropTicketState(),"InProgress"))
        },
        in_review_card:{
            onMouseLeave: () => (handleReleaseMoveTicket(getDragDropTicketState(),"InReview"))
        },
        done_card:{
            onMouseLeave: () => (handleReleaseMoveTicket(getDragDropTicketState(),"Done"))
        },
        create_ticket_button:{
            onClick: (event) => (handleGoToCreateTicketClick(event))},
        }
        
    return {
        BoardComponentOverride,
        BoardTicketToDoOverride,
        BoardTicketInProgressOverride,
        BoardTicketInReviewOverride,
        BoardTicketDoneOverride,
        customOverrideItems}}