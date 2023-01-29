import React, {useEffect, useState} from "react";
import UserService from "./UserService";
import BattlePass from "./bp/BattlePass";
import ChallengeContainer from "./challenges/ChallengeContainer";
import {Challenge} from "./UserService";
import {Bp} from "./UserService";
import {Users} from "./UserService";

export default function apiIntegration () {
    const [challenge, setChallenge] = useState<Challenge[]>([])
    const [bp, setBp] = useState<Bp[]>([])
    const [users, setUsers] = useState<Users[]>([])
    useEffect(() => {
        UserService.Challenges.list().then((data) => {
            setChallenge(data)
        })

        UserService.Bp.list().then((data) => [
            setBp(data)
        ])

        UserService.Users.list().then((data) => {
            setUsers(data)
        })
    }, [])
   return (
       <div>
           <ChallengeContainer challenges={challenge} />
       </div>
    )
}