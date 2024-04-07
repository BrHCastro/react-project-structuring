import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  width: 100%;
  max-width: 67.5rem;
  min-height: 100vh;

  margin-inline: auto;
  padding-inline: 1rem;
  padding-bottom: 3.9775rem;

  display: flex;
  flex-direction: column;

  main {
    flex: 1;
    display: flex;
  }

  @media (min-width: 640px) {
    padding-bottom: 2.5rem;
  }
`
