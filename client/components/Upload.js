import React, {useEffect} from 'react'
import {realtimeDB, storage, firestore} from '../../server/db'

/**
 * COMPONENT
 */

export const Upload = () => {
  useEffect(async () => {
    const storageRef = await storage.ref()
    const images = await storageRef.child('images')
    const list = await images.listAll()
    const items = await list.items
    const collectionRef = await firestore.collection('image-store')

    items.forEach(async ref => {
      const url = await ref.getDownloadURL()
      console.log(url)
      await collectionRef.add({url: url})
    })
  }, [])
  // var storageRef = storage.ref()

  // const images = await storageRef.child('images')
  // const list = await images.listAll()
  // const items = await list.items
  // const collectionRef = await firestore.collection('image-store');

  // items.forEach(async (ref) => {
  //   const url = await ref.getDownloadURL()
  //   console.log(url)
  //   await collectionRef.add({url: url})
  //   })

  //   console.log('images =>',images)
  // console.log('list =>',list)
  // console.log('items =>',items)

  return (
    <div>
      <h1>adding urls to firestore!</h1>
      {/* <button onClick={addUrls(items, collectionRef)}>Click to add urls!</button> */}
    </div>
  )
}
