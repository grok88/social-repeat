import {addPostAC} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {AppRootStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


export type PostType = {
    id: number
    message: string
    likesCount: number
}


type MapStateToPropsType = {
    posts: Array<PostType>
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}
type MapDispatchToPropsType = {
    addPost: (newPostText:string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPostText:string) => {
            dispatch(addPostAC(newPostText));
        }

    }
}
const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
