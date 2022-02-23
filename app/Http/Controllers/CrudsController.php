<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateCrudRequest;
use App\Models\Crud;
use Illuminate\Http\JsonResponse;

class CrudsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(Crud::all(), 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create(): JsonResponse
    {
        $crud = Crud::factory()->create();

        return response()->json($crud, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateCrudRequest $request
     * @param $id
     * @return JsonResponse
     */
    public function update(UpdateCrudRequest $request, Crud $crud): JsonResponse
    {
        $crud->update(['color' => $request->validated('color')]);

        return response()->json($crud, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $id
     * @return JsonResponse
     */
    public function destroy($id): JsonResponse
    {
        Crud::destroy($id);

        return response()->json(null, 205);
    }
}
