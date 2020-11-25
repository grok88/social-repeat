import React, {useEffect} from 'react';
import {User} from "../../redux/users-reducer";
import styles from './Users.module.css'

type UsersPropsType = {
    users: Array<User>
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<User>) => void
}
export const Users: React.FC<UsersPropsType> = (props) => {
    const {users, follow, setUsers, unFollow} = props;
    useEffect(()=>{
        setUsers([
            {
                id: 1,
                userUrl:'https://i.stack.imgur.com/I1QlN.png?s=328&g=1',
                fullName: 'Alex Gor',
                status: 'I am a boss!',
                location: {city: 'Glubokoe', country: 'Belarus',},
                followed: true
            },
            {
                id: 2,
                userUrl:'https://i.stack.imgur.com/I1QlN.png?s=328&g=1',
                fullName: 'Serg ',
                status: 'I am a owner',
                location: {city: 'Glubokoe', country: 'Belarus',},
                followed: true
            },
            {
                id:3,
                userUrl:'https://i.stack.imgur.com/I1QlN.png?s=328&g=1',
                fullName: 'Sveta ',
                status: 'I am a doctor!',
                location: {city: 'Glubokoe', country: 'Belarus',},
                followed: true
            },
        ]);
    },[])
    return <div>
        {
            users.map(u => <div key={u.id}>
                <div>
                    <div className={styles.avatarImg}>
                        <img src={u.userUrl}/>
                    </div>
                    <div>
                        {
                            u.followed ? <button onClick={()=> unFollow(u.id)}>Follow</button> : <button onClick={()=> follow(u.id)}>Unfollow</button>
                        }
                    </div>
                </div>
                <div>
                    <div>
                        {u.fullName}
                    </div>
                    <div>{u.status}</div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>

            </div>)
        }
    </div>
}
