import styled from "styled-components";

export const HomeContainer = styled.main`
    padding: 2rem 0 3rem;

`

export const CoffeeIntroduction = styled.section`
    height: 400px;
    align-items: start;
    justify-content: space-between;

    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 124px 52px 68px;
    /* grid-template-rows: auto auto auto; */
    column-gap: 1rem;

    .first{
        grid-column: 1;
        grid-row: 1;
        width: 588px;

        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
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
        font-size: 1.25rem;
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
        gap: 2.5rem;

        .items{
            font-size: 1rem;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;


            .cart, .package, .timer, .coffeeCup{
                color: ${props=> props.theme["white-1"]};

                width: 2rem;
                height: 2rem;

                border-radius: 100%;

                display: flex;
                align-items: center;
                justify-content: center;
            }

            .cart{
                background-color: ${props=> props.theme["yellow-dark"]};
            }

            .package{
                background-color: ${props=> props.theme["gray-700"]};
            }

            .timer{
                background-color: ${props=> props.theme["yellow"]};
            }

            .coffeeCup{
                background-color: ${props=> props.theme["purple"]};
            }
        }

    }

    /* @media only screen and (max-width: 1280px) {
        &{
            justify-content: flex-start;
        }
    } */

    @media only screen and (max-width: 1216px) {
        &{
           justify-content: space-between;
           grid-template-rows: 82px 80px 205px;

           height: 375px;
        }

        img{
            width: 360px;
        }

        .first{
            font-size: 2rem;
        }

        .fourth{
            margin-top: 1rem;
            gap: 1rem;
        }

        .first, .third, .fourth{
            width: 460px;
        }
    }


    @media only screen and (max-width: 928px) {
    
        &{
            height: 36.5rem;

            grid-template-columns: auto;
            grid-template-rows: 124px 270px 30px 68px;
            gap: 1rem;

            .first, .third{
                width: 100%;
            }

            .first{
                font-size: 3rem;
            }

            .second{
                grid-column: 1 ;
                grid-row:  2;
            }

            .third{
                margin-top: 0;

                grid-column: 1 ;
                grid-row:  3;
            }

            .fourth{
                margin-top: 0;

                width: 90%;

                grid-column: 1;
                grid-row: 4;
            }
        }
    }

    @media only screen and (max-width: 756px) {
        &{
            grid-template-rows: 124px 270px 52px 68px;
        }

        .fourth{
            width: 100%;
        }
    }

    @media only screen and (max-width: 657px) {
        &{
            grid-template-rows: 104px 270px 52px 68px;
        }
        
        .first{
            font-size: 2.5rem;
        }
    }

    @media only screen and (max-width: 640px) {
        &{
            height: 41.5rem;

            grid-template-rows: 104px 270px 52px 180px;
        }

        .fourth{
            width: 70%;
        }
    }

    @media only screen and (max-width: 565px) {
        .first{
            font-size: 2.1rem;
        }

        .fourth{
            width: 100%;
        }
    }

    @media only screen and (max-width: 490px) {
        &{
            height: 38rem;

            grid-template-rows: 75px 243px 52px 136px;
        }

        .first{
            font-size: 1.8rem;
        }

        img{
            width: 320px;
        }
    }

    @media only screen and (max-width: 437px) {
        .first{
            font-size: 1.7rem;
        }

        .third{
            font-size: 1.1rem;
        }
    }

    @media only screen and (max-width: 350px) {
        &{
            height: 34.5rem;
            grid-template-rows: 75px 187px 52px 180px;
        }

        .first{
            font-size: 1.6rem;
        }

        img{
            width: 246px;
        }
    }

    @media only screen and (max-width: 334px) {
        &{
            height: 33rem;
            grid-template-rows: 55px 187px 38px 136px;
        }

        .first{
            font-size: 1.3rem;
        }

        .third{
            font-size: 0.9rem;
        }

        .fourth{
            font-size: 0.7rem;
        }

        img{
            width: 246px;
        }
    }

    @media only screen and (max-width: 321px) {
        &{
            height: 33.5rem;
            grid-template-rows: 55px 187px 38px 136px;
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
        justify-content: flex-start;
        flex-wrap: wrap;

        column-gap: 2rem;
        row-gap: 2.5rem;
    }

    @media only screen and (max-width: 1216px) {
        .coffeeOptions{
            align-content: flex-start;
            /* justify-content: space-between; */
        }
    }

    @media only screen and (max-width: 640px) {
        .coffeeOptions{
            justify-content: center;
        }
    }

    @media only screen and (max-width: 490px) {
        h1{
            font-size: 1.6rem;
        }
    }

    @media only screen and (max-width: 334px) {
        h1{
            font-size: 1.3rem;
        }
    }

` 