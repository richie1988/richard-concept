--
-- PostgreSQL database dump
--

\restrict n4H3sBfzwvO6xVIciiisTU9nSOFzkZzjsdVWBKjK2B97PpxpahIKmPTsw80Us06

-- Dumped from database version 16.13 (Ubuntu 16.13-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.13 (Ubuntu 16.13-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: projects; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.projects (
    id integer NOT NULL,
    title character varying(150) NOT NULL,
    category character varying(100) NOT NULL,
    short_description text NOT NULL,
    full_description text NOT NULL,
    price numeric(10,2) NOT NULL,
    image_url character varying(255) NOT NULL,
    technologies text,
    features text,
    delivery_time character varying(100),
    support_info character varying(150),
    whatsapp_number character varying(30) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.projects OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.projects_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.projects_id_seq OWNER TO postgres;

--
-- Name: projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.projects_id_seq OWNED BY public.projects.id;


--
-- Name: projects id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects ALTER COLUMN id SET DEFAULT nextval('public.projects_id_seq'::regclass);


--
-- Data for Name: projects; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.projects (id, title, category, short_description, full_description, price, image_url, technologies, features, delivery_time, support_info, whatsapp_number, created_at) FROM stdin;
13	Corporate Website	Website	Modern and responsive business website.	A professional corporate website for companies and brands. Includes responsive design, service pages, about page, contact page, and SEO setup. Built using structured workflow: discussion, planning, design, development, and deployment.\n\nTypical freelance market price range: $100 – $300 depending on complexity.	180.00	/images/projects/corporate-website.jpg	React, CSS, Node.js	Responsive design, Contact form, SEO friendly, Fast loading	7 days to 2 weeks depending on complexity	30 days free support	+260773620728	2026-04-22 15:43:40.27796
14	Task Management Web App	Web App	Manage tasks, teams and productivity.	A full task management web application for teams and businesses. Includes dashboard, task management, task assignment, progress tracking, and admin panel. Built with full SDLC process.\n\nTypical freelance market price range: $300 – $800 depending on features.	550.00	/images/projects/task-manager.jpg	React, Express, PostgreSQL	Dashboard, Task tracking, Team management, Admin panel	1 to 3 weeks depending on complexity	30 days free support	+260773620728	2026-04-22 15:43:40.27796
15	eCommerce Mobile App	Mobile App	Android and iOS shopping app with checkout.	A mobile ecommerce application for Android and iOS. Includes product browsing, cart system, checkout, authentication and backend API integration.\n\nTypical freelance market price range: $600 – $1500 depending on complexity.	1200.00	/images/projects/ecommerce-app.jpg	React Native, API, PostgreSQL	Product listing, Cart, Checkout UI, User authentication	2 to 4 weeks depending on complexity	30 days free support	+260773620728	2026-04-22 15:43:40.27796
16	eCommerce Website	Ecommerce	Full-featured online store with admin panel.	A complete ecommerce website with product listings, categories, shopping cart, checkout system, payment integration, and admin dashboard.\n\nTypical freelance market price range: $700 – $2000 depending on complexity.	900.00	/images/projects/ecommerce-website.jpg	React, Node.js, PostgreSQL	Products, Cart, Admin panel, Order flow	2 to 3 weeks depending on complexity	30 days free support	+260773620728	2026-04-22 15:43:40.27796
17	ERP System	ERP	Complete ERP for inventory, sales and accounts.	A full ERP system for managing business operations including inventory, accounting, sales, reporting, and multi-user roles.\n\nTypical freelance market price range: $2000 – $5000+ depending on complexity.	3500.00	/images/projects/erp-system.jpg	React, Express, PostgreSQL	Inventory, Sales, Reports, Users, Accounts	3 to 6 weeks depending on complexity	45 days free support	+260773620728	2026-04-22 15:43:40.27796
18	CRM & HRPMS System	CRM / HRPMS	Customer relationship and HR management solution.	A business CRM and HR system including employee records, customer management, communication tools, attendance tracking, and reporting dashboard.\n\nTypical freelance market price range: $2000 – $5000+ depending on customization level.	2500.00	/images/projects/crm-hrpms.jpg	React, Node.js, PostgreSQL	CRM, HR records, Reports, Dashboard	2 to 5 weeks depending on complexity	30 days free support	+260773620728	2026-04-22 15:43:40.27796
\.


--
-- Name: projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.projects_id_seq', 18, true);


--
-- Name: projects projects_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.projects
    ADD CONSTRAINT projects_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict n4H3sBfzwvO6xVIciiisTU9nSOFzkZzjsdVWBKjK2B97PpxpahIKmPTsw80Us06

