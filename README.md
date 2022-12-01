# 리액트 토이 프로젝트 - 라프텔 상점 및 게시판 기능 구현

## Overview
애니메이션 스트리밍 플랫폼인 라프텔(https://laftel.net) 사이트에 <br />
애니메이션 관련 상품을 판매하는 상점과 유저 커뮤니티 기능을 추가하였다

## Description
1. React와 Redux를 이용해 게시판의 기본적인 CRUD 기능 구현
2. React Router로 관리자 페이지 접근 권한 부여
3. 관리자 페이지에서 유저와 게시판 관리 기능 구현 
4. mySql에 사용자, 게시판 DB를 만들어 데이터 저장
5. Ducks패턴에 맞추어 개발
6. Tailwind.css 사용

## Language
| client | server |
| :----: | :----: |
|<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/> <img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=Tailwind CSS&logoColor=white"/> | <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/> <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=Sequelize&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/> |

## Details
|페이지|기능|상세 기능|
|:---:|:---:|:---:|
|로그인|로그인 검사|이메일, 아이디에 정규식 검사|
|관리자|유저 관리|유저 삭제|
||게시판 관리|공지사항 등록/수정/삭제|
|게시판|공지사항|공지사항 목록/조회(일반 유저는 열람만 가능)|
||자유게시판|글 등록/수정/삭제/조회 가능|
|상점|상품 등록|상품 이름/가격/설명/이미지 업로드|
||상품 조회|상품 상세화면 페이지|
||상품 후기| 별점 등록 및 평균 별점, 후기 등록|
||장바구니|장바구니 상품 등록 및 삭제|
