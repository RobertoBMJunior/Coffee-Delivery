import styled from "styled-components";

export const LayoutContainer = styled.div`
    padding: 0 10rem;

    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 1440px) {
        &{
            padding: 0 6rem;
        }
    }

    @media only screen and (max-width: 1312px) {
        &{
            padding: 0 3rem;
        }
    }

    @media only screen and (max-width: 1216px) {
        &{
            padding: 0 8rem;
        }
    }

    @media only screen and (max-width: 1088px) {
        &{
            padding: 0 3rem;
        }
    }

    @media only screen and (max-width: 437px) {
        &{
            padding: 0 1rem;
        }
    }
`