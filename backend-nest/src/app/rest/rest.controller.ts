import { Controller, Get } from '@nestjs/common';
import { RestService } from './rest.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rest')
@Controller({
  path: '/rest',
  version: '1',
})
export class RestController {
  constructor(private readonly restService: RestService) {}

  @Get('/health')
  getHello(): string {
    return this.restService.getHello();
  }

  @Get('/pokemon')
  getPokemons() {
    return [
      {
        name: 'bulbasaur',
        url: 'https://pokeapi.co/api/v2/pokemon/1/',
      },
      {
        name: 'ivysaur',
        url: 'https://pokeapi.co/api/v2/pokemon/2/',
      },
      {
        name: 'venusaur',
        url: 'https://pokeapi.co/api/v2/pokemon/3/',
      },
      {
        name: 'charmander',
        url: 'https://pokeapi.co/api/v2/pokemon/4/',
      },
      {
        name: 'charmeleon',
        url: 'https://pokeapi.co/api/v2/pokemon/5/',
      },
    ];
  }
}
