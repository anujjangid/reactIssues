import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: 0 auto;
  h1 {
    color: #0366d6;
    font-size: 22px;
    font-weight: normal;
  }
`;

export const IssueListDetail = styled.div`
  .title {
    color: #000;
    font-weight: 400;
    word-wrap: break-word;
  }
  .number {
    color: #a3aab1;
    font-weight: 300;
    letter-spacing: -1px;
  }
  .headerBase {
    border-bottom: 1px solid #d3d4d4;
    color: #586069;
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
    padding-bottom: 20px;
  }
`;

export const Comment = styled.div`
  border: 1px solid #d1d5da;
  border-radius: 3px;
  margin-top: 20px;
  .header {
    background-color: #f6f8fa;
    border-bottom: 1px solid #d1d5da;
    border-radius: 3px 3px 0 0;
    color: red;
    padding: 10px 15px;
  }
`;

export const InnerWrapper = styled.div``;

export const Header = styled.div`
  background-color: #f6f8fa;
  border: 1px solid #e1e4e8;
  border-radius: 3px 3px 0 0;
  margin-top: 20px;
  padding: 0.8em 1.6em;

  .status {
    color: #586069;
    font-weight: 400;

    span {
      cursor: pointer;
    }

    span:nth-child(2) {
      margin-left: 10px;
    }

    .active {
      color: #000;
      font-weight: 600;
    }
  }
`;

export const ListStyle = styled.div`
  padding: 0.5em 1.2em;
  border: 1px solid #e1e4e8;
  margin-top: -1px;
  display: flex;

  .title {
    color: #24292e;
    font-size: 16px;
    font-weight: 600;
  }
  .status {
    margin-top: 4px;
    font-size: 12px;
    color: #586069;
    line-height: 1.25;
    a {
      color: #586069;
    }
  }
  a:hover {
    color: #0366d6;
  }

  .right-content {
    text-align: right;
    a {
      color: #586069;
      font-size: 12px
      font-weight: 600;
    }
  }
  :hover {
    background-color: #f6f8fa;
  }
`;

export const TagStyle = styled(Link)`
  background-color: ${props => '#' + props.color || 'grey'};
  color: #000;
  font-size: 12px;
  font-weight: 600;
  height: 20px;
  line-height: 15px;
  padding: 0.15em 4px;
  border-radius: 3px;
  box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
  margin-left: 4px;
  display: inline-flex;
  align-items: center;
  :hover {
    color: #000 !important;
  }
`;

export const Loading = styled.div``;

export const SVG = styled.div`
  display: inline-flex;

  align-items: start;

  svg {
    fill: currentColor;
    display: inline-block;
  }
  .info {
    color: #28a745;
    margin-right: 10px;
    margin-top: 5px;
  }
  .comments {
    color: #333;
    top: 5px;
    position: relative;
    margin-right: 5px;
  }
`;

export const Middle = styled.div`
  justify-content: center;
  flex-grow: 2;
  align-items: center;
`;
