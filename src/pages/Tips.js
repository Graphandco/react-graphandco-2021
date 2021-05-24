import React from 'react'
import { TipList } from '../components/Tips/TipList'
import PageAttributes from './PageAttributes'

export default function Tips() {
    return (
        <>
        <PageAttributes bodyID="tips" pageTitle="Tips" />
        <TipList />
        </>
    )
}
