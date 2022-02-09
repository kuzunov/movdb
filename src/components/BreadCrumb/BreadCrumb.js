import React from 'react'
import { Link } from 'react-router-dom';

//styles
import { Wrapper,Content } from './BreadCrumb.styles';

const BreadCrumb =({movieTite}) => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <span>Home</span>
            </Link>
            <span>
                |
            </span>
            <span>{movieTite}</span>
        </Content>
    </Wrapper>
)
export default BreadCrumb;
