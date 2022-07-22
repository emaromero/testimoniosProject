import React from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import Users from './Users';

export default function Data() {
    const [personas, setPersonas] = useState([])
    const [result, setResult] = useState([]);
    const [error, setError] = useState(false)

    useEffect(() => {
        const db = getFirestore()

        const personasCollection = collection(db, 'personas');

        getDocs(personasCollection)
            .then((snapshot) => {
            setResult(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        })
        .catch((error) => {
            setError(error);
        });
    }, [ ]);

console.log(result);


    return (
        <>
            <Users personas={result} />
        </>
    )
}