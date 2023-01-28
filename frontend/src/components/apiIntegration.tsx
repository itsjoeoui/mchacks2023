import React, {useEffect, useState} from "react";
import UserService from "./UserService";
import BattlePass from "./bp/BattlePass";
import ChallengeContainer from "./challenges/ChallengeContainer";
export default function apiIntegration () {
    const [challenge, setChallenge] = useState<any>([])
    const [bp, setBp] = useState<any>([])
    const [users, setUsers] = useState<any>([])

    useEffect(() => {
        UserService
            .getAll('challenges')
            .then(initialChallenges => {
                setChallenge(initialChallenges)
            })

        UserService
            .getAll('bp')
            .then(initalBp => {
                setBp(initalBp)
            })

       UserService
           .getAll('users')
           .then(initalUsers => {
               setUsers(initalUsers)
           })

    }, [])

   return (
       <div>
           <BattlePass />
           <ChallengeContainer />
       </div>
    )
}