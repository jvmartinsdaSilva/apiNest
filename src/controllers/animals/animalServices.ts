import { Injectable } from '@nestjs/common';

@Injectable()
export class AnimalServices {
    getCat(): string {
        return "Hellow , this is a cat."
    }

    getDog(dogaNmae: string){
        return "Hellow this dog is " + dogaNmae
    }

    newAnimal(animal: string){
        return `Animl ${animal}`
    }
}