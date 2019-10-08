-----------------------------------
-- Criação ------------------------
-----------------------------------

-- 1. Informe o SQL para criação da tabela aluno (4 pontos):

 CREATE TABLE aluno ( 
 matricula integer PRIMARY KEY AUTOINCREMENT NOT NULL,
 nome varchar(255),
 email varchar(255),
 turma int(1) 
 );
 

-- 2. Informe o SQL para criação da tabela disciplina (4 pontos):

create table disciplina(
id_disciplina integer PRIMARY KEY AUTOINCREMENT not null,
nome varchar(255),
carga_horaria int
);

-- 3. Informe o SQL para criação da tabela pauta (4 pontos):

create table pauta(
id_pauta integer PRIMARY KEY AUTOINCREMENT not null,
matricula int,
id_disciplina int,
nota_1 decimal,
nota_2 decimal,
nota_3 decimal,
FOREIGN KEY (matricula) REFERENCES aluno(matricula),
FOREIGN KEY (id_disciplina) REFERENCES disciplina(id_disciplina)
);

-- 4. Com o comando ALTER TABLE mude o nome das colunas nota_1, nota_2 e nota_3 para avaliacao_1, avaliacao_2 e avaliacao_3 (2 pontos):

ALTER TABLE pauta rename COLUMN nota_1 to avaliacao_1;
ALTER table pauta rename COLUMN nota_2 to avaliacao_2;
alter table pauta rename COLUMN nota_3 to avaliacao_3;
-----------------------------------
-- Inserção dos dados -------------
-----------------------------------
-- Planilha com os dados a serem inseridos: https://tinyurl.com/y3ngdd5s

-- 1. Informe o SQL para inserção na tabela alunos (3 pontos):

insert into aluno values 
(null,"Ana paula Silva", "aos@residencia.com.br",1),
(null,"João Souza", "js@residencia.com.br",1),
(null,"Maria moreira", "mm@residencia.com.br",1),
(null,"Daiane Costa", "dc@residencia.com.br",2),
(null,"Guilherme Silva", "gs@residencia.com.br",1),
(null,"Júlia ALmeida", "ja@redidencia.com.br",2),
(null,"Diogo Andrade", "da@residencia.com.br",2),
(null,"Manuela Botelho", "mb@gmail.com",1),
(null,"Thiago Tavares", "tt@residencia.com.br",2),
(null,"João Pedro Carvalho", "jpc@residencia.com.br",1);

-- 2. Informe o SQL para inserção na tabela disciplina (3 pontos):

INSERT INTO disciplina VALUES (null,"Banco de dados", 24),(null,"Lógica de programação",40),(null,"Programação backend",44);


-- 3. Informe o SQL para inserção dos dados na tabela pauta
-- (note que devem ser inseridos os respectivos identificadores de
-- alunos e disciplinas, não os nomes) (3 pontos):

INSERT INTO pauta values 
(null,(select matricula from aluno where nome like 'Ana Paula Silva'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 10,9,10),
(null,(select matricula from aluno where nome like 'Ana Paula Silva'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 9,8,7),
(null,(select matricula from aluno where nome like 'Ana Paula Silva'), (select id_disciplina from disciplina where nome like 'Programação backend'), 7,7,9),
(null,(select matricula from aluno where nome like 'João Souza'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 9,6,7),
(null,(select matricula from aluno where nome like 'João Souza'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 10,10,10),
(null,(select matricula from aluno where nome like 'João Souza'), (select id_disciplina from disciplina where nome like 'Programação backend'), 9,8,9),
(null,(select matricula from aluno where nome like 'Maria Moreira'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 10,7,7),
(null,(select matricula from aluno where nome like 'Daiane Costa'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 8,6,9),
(null,(select matricula from aluno where nome like 'Daiane Costa'), (select id_disciplina from disciplina where nome like 'Programação backend'), 6,6,8),
(null,(select matricula from aluno where nome like 'Guilherme Silva'), (select id_disciplina from disciplina where nome like 'Programação backend'), 8,6,9),
(null,(select matricula from aluno where nome like 'Diogo Andrade'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 8,8,10),
(null,(select matricula from aluno where nome like 'Manuela Botelho'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 5,7,7),
(null,(select matricula from aluno where nome like 'Thiago Tavares'), (select id_disciplina from disciplina where nome like 'Programação backend'), 5,5,4),
(null,(select matricula from aluno where nome like 'Thiago Tavares'), (select id_disciplina from disciplina where nome like 'Lógica de programação'), 7,7,6),
(null,(select matricula from aluno where nome like 'João Pedro Carvalho'), (select id_disciplina from disciplina where nome like 'Banco de dados'), 5,5,2);

-----------------------------------
-- Atualização dos dados ----------
-----------------------------------

-- 1. Atualizar o e-mail da aluna Manuela Botelho para mb@residencia.com.br (3 pontos):

--<insira o sql aqui>

-- 2. Atualizar a nota 3 do aluno João Pedro Carvalho em Banco de dados para 7 (3 pontos):

--<insira o sql aqui>

-----------------------------------
-- Consultas ----------------------
-----------------------------------

-- 1. Selecionar o nome e a turma dos alunos (1 ponto):

--<insira o sql aqui>

-- 2. Selecionar a quantidade total de alunos cadastrados (2 pontos):

--<insira o sql aqui>

-- 3. Selecionar a quantidade total de alunos em cada disciplina (4 pontos):

--<insira o sql aqui>

-- 4. Selecionar o nome do aluno, disciplina e as três notas de cada aluno (usando INNER JOIN ou WHERE) (4 pontos):

--<insira o sql aqui>

-- 5. Selecionar o nome dos alunos e a quantidade de disciplinas que cada um cursa (4 pontos):

--<insira o sql aqui>

-- 6. Selecionar o nome, disciplina e a média das três notas de cada aluno (4 pontos):

--<insira o sql aqui>

-- 7. Selecionar o nome, disciplina e a média das três notas dos alunos que tenham média menor que 6 (4 pontos):

--<insira o sql aqui>

-- 8. Selecionar o nome da disciplina e as médias das 3 notas (separadamente) de todos os alunos para cada disciplina (4 pontos):

--<insira o sql aqui>

-- 9. Selecione o aluno com maior nota na avaliação 1 de banco de dados, mostrando qual foi a nota (4 pontos):

--<insira o sql aqui>


