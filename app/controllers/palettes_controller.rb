class PalettesController < ApplicationController
  def index

  end

  def create
    Palette.new (
      user_id: params[:user_id]
      )
  end
end
