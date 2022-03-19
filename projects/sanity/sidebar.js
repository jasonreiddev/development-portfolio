import React, { Children } from 'react';
import S from '@sanity/desk-tool/structure-builder';
import { FaCog as icon } from 'react-icons/md'

// build a custom sidebar
export default function Sidebar() {
  return S.list()
    .title(`Jason Reid's Development Portfolio`)
    .items([
      // create new sub item
      S.listItem()
        .title('Site Settings')
        .icon(() => <span>{icon}</span>)
        .child(
          S.editor()
            .schemaType('siteSettings')
            // make a new document ID, so we don't have a random string of numbers
            .documentId('JReidDevPort')
        ),
      // add in the rest of our document items
      ...S.documentTypeListItems().filter(
        item => item.getId() !== 'siteSettings'
      ),
    ]);
}
