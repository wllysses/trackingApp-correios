import styled from "styled-components";

export const Content = styled.div`
    background-color: var(--background);
    padding: 5rem 0;

    header {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            max-width: 10%;
        }

        h1 {
            color: var(--yellow);
            font-size: 5rem;
            font-weight: 700;

            span {
                color: #fff;
            }

        }
    }
`