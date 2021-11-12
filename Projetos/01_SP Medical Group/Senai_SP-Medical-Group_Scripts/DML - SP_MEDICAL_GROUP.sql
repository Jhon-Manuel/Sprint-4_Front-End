USE T_Jhon_SP_MEDICAL_GROUP

INSERT INTO CLINICA(nomeFantasia,razaoSocial,endereco,CNPJ)
VALUES ('CLinica Possarle','SP Medical Group','Av. Barão Limeira-532-São Paulo-SP
','86.400.902/0001-30');

INSERT INTO TIPOUSUARIO(tipoUsuario)
VALUES ('Administrador'),('Médico'),('Paciente');

INSERT INTO ESPECIALIDADE(tipoEspecialidade)
VALUES ('Acupuntura
'),(' Anestesiologia
'),(' Angiologia
'),(' Cardiologia
'),(' Cirurgia Cardiovascular
'),(' Cirurgia da Mão
'),(' Cirurgia do Aparelho Digestivo
'),(' Cirurgia Geral
'),(' Cirurgia Pediátrica
'),(' Cirurgia Plástica
'),(' Cirurgia Torácica
'),(' Cirurgia Vascular
'),(' Dermatologia
'),(' Radioterapia
'),(' Urologia
'),(' Pediatria
'),('Psiquiatria');

INSERT INTO SITUACAO(tipoSituacao)
VALUES ('Realizada'),('Cancelada'),('Agendada')

INSERT INTO USUARIO(idTipoUsuario, email, senha)
VALUES (1,'ligia@gmail.com','123456
'),(3,
'alexandre@gmail.com','234567
'),(3,
'fernando@gmail.com','345678
'),(3,
'henrique@gmail.com','456789
'),(3,
'joao@hotmail.com','567900
'),(3,
'bruno@gmail.com','679011
'),(3,
'mariana@outlook.com','790122
'),(2,
'ricardo.lemos@spmedicalgroup.com.br','901233
'),(2,
'roberto.possarle@spmedicalgroup.com.br','101234
'),(2,
'helena.souza@spmedicalgroup.com.br','11234
');

INSERT INTO PACIENTE(idUsuario, nome,dataNascimento,telefone,RG,CPF,endereco)
VALUES (1,'Ligia','10/13/1983','11 3456-7654','43522543-5','94839859000','Rua Estado de Israel- 240- São Paulo- Estado de São Paulo/04022-000'),
(2,'Alexandre','7/23/2001','11 98765-6543','32654345-7','73556944057','Av. Paulista- 1578 - Bela Vista- São Paulo - SP/01310-200'),
(3,'Fernando','10/10/1978','11 97208-4453','54636525-3','16839338002','Av. Ibirapuera - Indianópolis- 2927-  São Paulo - SP/04029-200'),
(4,'Henrique','10/13/1985','11 3456-6543','54366362-5','14332654765','R. Vitória- 120 - Vila Sao Jorge- Barueri - SP/06402-030'),
(5,'João','08/27/1975','11 7656-6377','53254444-1','91305348010','R. Ver. Geraldo de Camargo- 66 - Santa Luzia- Ribeirão Pires - SP/09405-380'),
(6,'Bruno','03/21/1972','11 95436-8769','54566266-7','79799299004','Alameda dos Arapanés- 945 - Indianópolis, São Paulo - SP/04524-001'),
(7,'Mariana','03/05/2018','11 985688681','54566266-8','13771913039','R Sao Antonio- 232 - Vila Universal- Barueri - SP/06407-140');

INSERT INTO MEDICO(idUsuario, idEspecialidade, nome,CM)
VALUES (8,2,'Ricardo Lemos','54356-SP'),
(9,17,'Roberto Possarle','53452-SP'),
(10,16,'Helena Strada','65463-SP');

INSERT INTO CONSULTA(idPaciente, idMedico,idSituacao, dataConsulta)
VALUES (7,3,1,'01/02/2020 15:00'),
(2,2,2,'01/06/2020 10:00'),
(3,2,1,'02/07/2020 11:00'),
(2,2,1,'02/06/2018 10:00'),
(4,1,2,'02/07/2019 11:00'),
(7,3,3,'03/08/2020 15:00'),
(4,1,3,'03/09/2020 11:00');

UPDATE CONSULTA
SET idMedico=1
WHERE idConsulta=7;

