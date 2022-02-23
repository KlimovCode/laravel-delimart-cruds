<?php

namespace Tests\Feature;

use App\Models\Crud;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CrudsTest extends TestCase
{
    use RefreshDatabase;

    public function setUp(): void
    {
        parent::setUp();

        $this->seed();
    }

    public function test_cruds_index()
    {
        $this->get('/api/cruds')
            ->assertJsonStructure([
                ['id', 'name', 'color']
            ])
            ->assertStatus(200);
    }

    public function test_cruds_create()
    {
        $this->get('/api/cruds/create')
            ->assertJsonStructure(['id', 'name', 'color'])
            ->assertStatus(201);
    }

    public function test_cruds_update()
    {
        $crud = Crud::all()->random(1)->first();
        $new_crud_color = $crud->color == 'green' ? 'red' : 'green';

        $this->patch('/api/cruds/' . $crud->id,
            [
                'color' => $new_crud_color
            ]
        )
            ->assertJsonStructure(['id', 'name', 'color'])
            ->assertJson(['color' => $new_crud_color])
            ->assertStatus(200);
    }

    public function test_cruds_destroy()
    {
        $crud_id = Crud::all()->random(1)->first();

        $this->delete('/api/cruds/' . $crud_id)
            ->assertStatus(205);
    }
}
