Rails.application.routes.draw do
  get '/' => 'palettes#index'
  post '/palette' => 'palettes#create'

  post '/' => 'palette_colors#create'

  post '/' => 'colors#create'
end
