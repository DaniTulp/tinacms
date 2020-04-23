import styled, { css } from 'styled-components'

type MenuPlaceholderProps = {
  menuBoundingBox: any
}

export const MenuPlaceholder = styled.div<MenuPlaceholderProps>`
  color: transparent;
  background: transparent;
  pointer-events: none;
  position: relative;
  display: block;
  height: ${props => props.menuBoundingBox.height}px;
  width: ${props => props.menuBoundingBox.width}px;
`

type MenuWrapperProps = {
  menuFixed: boolean
  menuBoundingBox: any
  menuFixedTopOffset: string
}

export const MenuWrapper = styled.div<MenuWrapperProps>`
  position: relative;
  margin-bottom: 14px;
  z-index: var(--tina-z-index-1);

  ${props =>
    props.menuFixed &&
    css`
      position: fixed;
      width: ${props.menuBoundingBox.width}px;
      top: ${props.menuFixedTopOffset};
    `};
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  top: 0;
  width: 100%;
  background-color: white;
  border-radius: var(--tina-radius-small);
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.12);
  border: 1px solid var(--tina-color-grey-2);
  overflow: hidden;
  z-index: var(--tina-z-index-0);
`
