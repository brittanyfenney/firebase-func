import React from 'react'
import {realtimeDB, storage} from '../../server/db'

/**
 * COMPONENT
 */
export const Upload = async () => {
  var storageRef = storage.ref()

  const list = await storageRef.child('images').listAll()

  console.log(list)

  const storageAll = await storageRef.listAll()
  console.log(storageAll)
  const items = storageAll._delegate.items
  console.log(items)

  items.forEach(ref => console.log(ref.getDownloadURL()))

  // let fileNames = ['glow-over-orb-png-30.png',
  //  'head-crown-tumblr-aesthetic-grunge-grungeaesthetic-png-grunge-tumblr-png-1024_1024.png','kagt14c0mmn21.png']

  //  for (let i = 0; i < fileNames.length; i++) {
  //    storageRef.child(fileNames[i]).getDownloadURL().then(item => {
  //     console.log(item)
  //    })

  //  }

  return (
    <div>
      <h1>running upload to db!</h1>
      <img src="https://firebasestorage.googleapis.com/v0/b/capstone-e6ea2.appspot.com/o/Amazing-Quotes-PNG-Image.png" />
    </div>
  )
}
