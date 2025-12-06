/*Crie uma classe que modele uma avaliação física de academia:
Atributos: Id matricula, data da matrícula, aluno e avaliações físicas.
Informações do aluno, informações da última avaliação e informações de uma avaliação qualquer.*/

class avaliacaoFisica {
  public idMatricula: number
  public dataMatricula: number
  public aluno: string
  public avaliacoesFisicas: string
  public alunoInfo: string
  public ultimaAvaliacaoInfo: string
  public avaliacaoRandomInfo: string

  constructor(idMatricula: number, dataMatricula: number, aluno: string, avaliacoesFisicas: string, alunoInfo: string, ultimaAvaliacaoInfo: string, avaliacaoRandomInfo: string){
    this.idMatricula = idMatricula
    this.dataMatricula = dataMatricula
    this.aluno = aluno
    this.avaliacoesFisicas = avaliacoesFisicas
    this.alunoInfo = alunoInfo
    this.ultimaAvaliacaoInfo = ultimaAvaliacaoInfo
    this.avaliacaoRandomInfo = avaliacaoRandomInfo
  }
}