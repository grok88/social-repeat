import {addPostAC, updatePostAC} from "../../../redux/profile-reducer";
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
    newPostText: string
    posts: Array<PostType>
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
    return {
        newPostText: state.profilePage.newPostText,
        posts: state.profilePage.posts
    }
}
type MapDispatchToPropsType = {
    addPost: () => void
    updatePost: (text: string | null) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC());
        },
        updatePost: (text: string | null) => {
            dispatch(updatePostAC(text));
        }
    }
}
const MyPostsContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppRootStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
