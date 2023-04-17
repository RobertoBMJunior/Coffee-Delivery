import styled from "styled-components";

export const HomeContainer = styled.main`
    padding: 94px 0;

`

export const CoffeeIntroduction = styled.section`
    height: 444px;
    align-items: start;
    justify-content: space-between;

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 124px 52px 68px;
    column-gap: 1rem;

    .first{
        grid-column: 1;
        grid-row: 1;
        width: 588px;

        font-family: 'Baloo 2', cursive;
        font-size: 48px;
        font-weight: 800;
        color: ${props => props.theme["gray-800"]}
    }

    .second{
        grid-column: 2 ;
        grid-row: 1 / 4;
    }

    .third{
        margin-top: 1rem;
        width: 588px;

        grid-column: 1 ;
        grid-row: 2;
        font-size: 20px;
        font-style: normal;
    }

    .fourth{
        margin-top: 4.68rem;
        width: 588px;

        grid-column: 1;
        grid-row: 3;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 40px;

        .items{
            font-size: 1rem;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.375rem;
        }

    }

    @media only screen and (max-width: 1280px) {
    &{
        grid-template-columns: auto;
        grid-template-rows: 124px auto 52px 68px;

        .second{
            grid-column: 1 ;
            grid-row:  2;
        }

        .third{
            grid-column: 1 ;
            grid-row:  3;
        }

        .fourth{
            grid-column: 1;
            grid-row: 4;
        }
    }
}
`

export const CoffeeChoose = styled.section`
    h1{
        margin-bottom: 3.375rem;

        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        color: ${props => props.theme["gray-700"]}
    }

    .coffeeOptions{
        display: flex;
        flex-wrap: wrap;

        column-gap: 2rem;
        row-gap: 2.5rem;
    }
` 