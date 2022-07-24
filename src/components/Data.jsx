import React from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Users from './Users';

export default function Data() {
    const [personas, setPersonas] = useState([]);

    useEffect(() => {
        const db = getFirestore()

        const personasCollection = collection(db, 'personas');

        getDocs(personasCollection)
            .then((snapshot) => {
                setPersonas(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            })
            .catch((error) => {
                console.log(error);
            });
    }, [ ]);

    // async function getPersonas(db) {
    //     const personas = collection(db, 'personas');
    //     const personasSnapshot = await getDocs(personas);
    //     const personasList = personasSnapshot.docs.map(doc => doc.data());
    //     return personasList;
    // }

    console.log(personas)

    return (
        <>
            <Users personas={personas} />
        </>
    )
}