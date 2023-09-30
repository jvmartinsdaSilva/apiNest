import { Controller, Get, Param } from "@nestjs/common";
import { AnimalServices } from "./animalServices";

@Controller("/animals")
export class AnimalController {
    constructor(private readonly appService: AnimalServices) { }

    @Get("cats")
    getCat(): string {
        return this.appService.getCat()
    }

    @Get("/dog")
    getDog(): string {
        return this.appService.getDog("boba")
    }

    @Get("/newAnimal/:animal")
    findOne(@Param('animal') animal: string): string {
        return this.appService.newAnimal(animal)
    }
}