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

            padding: 10px;
            border-radius: 6px;

            background-color: ${props => props.theme["purple-light"]};

            svg{
                color: ${props => props.theme.purple}
            }
        }

        .cart{
            padding: 10px;
            border-radius: 6px;
            
            height: 40px;
            
            background-color: ${props => props.theme["yellow-light"]};

            svg{
            color: ${props => props.theme["yellow-dark"]};
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

                /* position: relative;
                top: -42px;
                right: -20px; */
            }
        }
    }


`