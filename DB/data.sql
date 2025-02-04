PGDMP      #                |            postgres    16.3    16.3     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            �           1262    5    postgres    DATABASE     |   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Russian_Russia.1251';
    DROP DATABASE postgres;
                postgres    false            �           0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    4758                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            �           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    24607    Todos    TABLE     �   CREATE TABLE public."Todos" (
    id integer NOT NULL,
    title text NOT NULL,
    text text NOT NULL,
    done boolean NOT NULL
);
    DROP TABLE public."Todos";
       public         heap    postgres    false            �            1259    24606    Todos_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Todos_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 %   DROP SEQUENCE public."Todos_id_seq";
       public          postgres    false    217            �           0    0    Todos_id_seq    SEQUENCE OWNED BY     A   ALTER SEQUENCE public."Todos_id_seq" OWNED BY public."Todos".id;
          public          postgres    false    216            �           2604    24610    Todos id    DEFAULT     h   ALTER TABLE ONLY public."Todos" ALTER COLUMN id SET DEFAULT nextval('public."Todos_id_seq"'::regclass);
 9   ALTER TABLE public."Todos" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    216    217            �          0    24607    Todos 
   TABLE DATA           8   COPY public."Todos" (id, title, text, done) FROM stdin;
    public          postgres    false    217   �       �           0    0    Todos_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public."Todos_id_seq"', 1, true);
          public          postgres    false    216            �           2606    24614    Todos Todos_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Todos"
    ADD CONSTRAINT "Todos_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Todos" DROP CONSTRAINT "Todos_pkey";
       public            postgres    false    217            �      x������ � �     