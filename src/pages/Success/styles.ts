import styled, { css } from "styled-components";

export const SuccessContainer = styled.main`
    padding-bottom: 2rem;

    h1{
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;

        color: ${props=> props.theme["yellow-dark"]}
    }

    h2{
        font-size: 1.25rem;
        font-weight: 400;
        color: ${props=> props.theme["gray-700"]};

        margin: 0.25rem 0 1.5rem;
    }

    section{
        display: flex;
        justify-content: space-between;
        gap: 1rem;

        .orderInformation{
            flex: 1;
            padding: 2.5rem;

            border-left: 1px solid ${props=> props.theme["yellow-dark"]};
            border-right: 1px solid ${props=> props.theme["purple-dark"]};
            border-top: 1px solid ${props=> props.theme["yellow-dark"]};
            border-bottom: 1px solid ${props=> props.theme["purple-dark"]};

            border-radius: 6px 50px;

            display: flex;
            flex-direction: column;
            gap: 2rem;

            article{
                display: flex;
                align-items: center;
                gap: 0.75rem;

                div:first-child{
                    width: 2rem;
                    height: 2rem;

                    border-radius: 100%;
                    color: ${props=> props.theme["white-1"]};

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                div:nth-child(2){
                    display: flex;
                    flex-direction: column;

                    font-size: 1rem;

                    span:nth-child(2), .bold{
                        font-weight: 700;
                    }
                }

                .map{
                    background-color: ${props=> props.theme["purple"]};
                }

                .timer{
                    background-color: ${props=> props.theme["yellow"]};
                }

                .dolar{
                    background-color: ${props=> props.theme["yellow-dark"]};
                }
            }
        }

        /* img{
            flex: 1;
        } */
    }

    @media only screen and (max-width: 1216px) {
        img{
            height: 240px;
        }

        .orderInformation{
            padding: 2.5rem 1rem !important;
        }
    }

    @media only screen and (max-width: 1100px) {
        img{
            height: 220px;
        }
    }

    @media only screen and (max-width: 1002px) {
        img{
            height: 180px;
        }
    }

    @media only screen and (max-width: 876px) {
        section{
            align-items: flex-start;
            flex-direction: column-reverse;
        }

        .orderInformation{
            width: 85%;
        }

        img{
            height: 180px;
        }
    }

    @media only screen and (max-width: 680px) {
        .orderInformation{
            width: 100%;
        }
    }

    @media only screen and (max-width: 448px) {
        h1{
            font-size: 1.7rem;
        }
    }

    @media only screen and (max-width: 336px) {
        h1{
            font-size: 1.4rem;
        }

        h2{
            font-size: 1.1rem;
        }

        img{
            width: 246px;
        }
    }
`