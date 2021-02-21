export enum TodoStatusEnum {
  'actif' = 'En cours',
  'waiting' = 'En attente',
  'done' = 'Finalisé',
}

export class todo {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public date: Date,
    public statut: TodoStatusEnum,
  ) {}
}
