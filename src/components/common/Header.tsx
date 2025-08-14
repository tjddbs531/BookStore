import { styled } from "styled-components";
import logo from "../../assets/images/logo.png";
import { FaSignInAlt, FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Category } from "../../models/category.model";
import { useCategory } from "../../hooks/useCategory";

function Header() {
  const { category } = useCategory();

  return (
    <HeaderStyle>
      <h1 className="logo">
        <Link to="/">
          <img src={logo} alt="boot store" />
        </Link>
      </h1>

      <nav className="category">
        <ul>
          {category.map((item) => (
            <li key={item.category_id}>
              <Link to={`/books?category_id=${item.category_id}`}>
                {item.category_name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <nav className="auth">
        <ul>
          <li key="login">
            <a href="/login">
              <FaSignInAlt />
              로그인
            </a>
          </li>
          <li key="signup">
            <a href="/signup">
              <FaRegUser />
              회원가입
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  .logo {
    img {
      width: 180px;
    }
  }

  .category {
    ul {
      display: flex;
      gap: 40px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;
      li {
        a {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          line-height: 1;
          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }
`;

export default Header;
