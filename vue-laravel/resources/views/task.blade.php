@extends('layouts.app')

@section('title', '- Tasks')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Administrar Notas:</div>

                <div class="card-body">
                    <tasks />
                </div>
            </div>
        </div>
    </div>
</div>
@endsection