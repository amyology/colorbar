class PalettesController < ApplicationController
  def index

  end

  def create
    @user_id = 1
    #change id after users set up

    @palette = Palette.create(user_id: @user_id)

    color_array = params[:color_array]

    @color_array = color_array.split(",")

    @color_array.each do |color|
      @palette_color = Color.find_or_create_by(value: color)
      PaletteColor.create(palette_id: @palette.id, color_id: @palette_color.id)
    end

    redirect_to '/'

  end
end
