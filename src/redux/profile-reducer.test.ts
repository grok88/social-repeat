import {addPostAC, deleteAC, getProfileAC, profileReducer, ProfileStateType, setStatus} from "./profile-reducer";

let startState: ProfileStateType;

beforeEach(() => {
    startState = {
        posts: [
            {id: 1, message: 'Hello, What are you doing?', likesCount: 5},
            {id: 2, message: 'Hi, I am learning TypeScript now.', likesCount: 6},
            {id: 3, message: 'Hi,', likesCount: 7},
        ],
        status: 'test',
        profile: null
    }
});

test('New post should be added in the begin  posts', () => {
    const newPostText = 'New Post';
    const endState = profileReducer(startState, addPostAC(newPostText));

    expect(endState.posts.length).toBe(4)
    expect(endState.posts[0].message).toBe(newPostText)
    expect(endState.posts[0].likesCount).toBe(0)
});
test('Correct post should be deleted from array  posts', () => {

    const endState = profileReducer(startState, deleteAC(3));

    expect(endState.posts.length).toBe(2)
    expect(endState.posts[2]).toBeUndefined();
});
test('Correct status should be set ', () => {
    const profile = {
        userId: 1,
        lookingForAJob: true,
        lookingForAJobDescription: 'Good',
        fullName: 'Alex',
        contacts: {
            github: '',
            vk: '',
            facebook: '',
            instagram: '',
            twitter: '',
            website: '',
            youtube: '',
            mainLink: '',
        },
        photos: {
            small: '',
            large: ''
        }
    }
    const endState = profileReducer(startState, getProfileAC(profile));

    expect(endState.profile).toEqual(profile);
    // expect(endState.status).toBe(status);
});
