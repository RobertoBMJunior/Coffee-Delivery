import styled from "styled-components";

export const HeaderContainer = styled.header`
    padding: 2rem 0;

    display: flex;
    align-items: center;
    justify-content: space-between; 

    .locale_and_cart{
        display: flex;
        align-items: center;
        gap: 0.75rem;


        .locale{
            display:flex;
            align-items: center;
            gap: 4px;

            text-decoration: none;

            padding: 10px;
            border-radius: 6px;

            background-color: ${props => props.theme["purple-light"]};

            

            svg{
                color: ${props => props.theme.purple}
            }

            &:hover{
                background-color: ${props => props.theme["purple"]};
                color: ${props => props.theme["purple-light"]};

                transition: all 0.2s;

                svg{
                    color: ${props => props.theme["purple-light"]}
                }
            }
        }

        .cart{
            padding: 10px;
            border-radius: 6px;
            
            height: 40px;
            
            background-color: ${props => props.theme["yellow-light"]};

            svg{
                color: ${props => props.theme["yellow-dark"]};
                transition: all 0.2s;
            }

            span{
                width: 1.25rem;
                height: 1.25rem;

                display: flex;
                align-items: center;
                justify-content: center;

                background-color: ${props => props.theme["yellow-dark"]};
                color: ${props => props.theme["white-1"]};
                border-radius: 100%;


                position: absolute;
                top: 25px;
                right: 150px;

                transition: all 0.2s;

                /* position: relative;
                top: -42px;
                right: -20px; */
            }

            &:hover{
                /* background-color: ${props => props.theme["yellow-dark"]}; */
                svg{
                    color: ${props => props.theme["gray-800"]};
                    transition: all 0.2s;
                }

                span{
                    background-color: ${props => props.theme["gray-800"]};
                    transition: all 0.2s;
                }
            }
        }
    }


`