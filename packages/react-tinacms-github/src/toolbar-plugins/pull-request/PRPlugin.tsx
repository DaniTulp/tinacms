/**

Copyright 2019 Forestry.io Inc

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

import React, { useState } from 'react'
import { Modal, ModalPopup, ModalHeader, ModalBody } from 'tinacms'
import { PullRequestIcon } from '@tinacms/icons'

import { PRModal } from './PRModal'
import { ToolbarButton } from '../../open-authoring-ui/components/ToolbarButton'
import { DesktopLabel } from '../../open-authoring-ui/components/DesktopLabel'

interface PullRequestButtonOptions {
  baseRepoFullName: string
  forkRepoFullName: string
}

export const PRPlugin = (
  baseRepoFullName: string,
  forkRepoFullName: string
) => ({
  __type: 'toolbar:widget',
  name: 'create-pr',
  weight: 5,
  component: PullRequestButton,
  props: {
    baseRepoFullName,
    forkRepoFullName,
  },
})

function PullRequestButton({
  baseRepoFullName,
  forkRepoFullName,
}: PullRequestButtonOptions) {
  const [opened, setOpened] = useState(false)
  const close = () => setOpened(false)
  return (
    <>
      <ToolbarButton onClick={() => setOpened(p => !p)}>
        <PullRequestIcon />
        <DesktopLabel> Pull Request</DesktopLabel>
      </ToolbarButton>
      {opened && (
        <Modal>
          <ModalPopup>
            <ModalHeader close={close}>Pull Request</ModalHeader>
            <ModalBody>
              <PRModal
                baseRepoFullName={baseRepoFullName}
                forkRepoFullName={forkRepoFullName}
              />
            </ModalBody>
          </ModalPopup>
        </Modal>
      )}
    </>
  )
}
