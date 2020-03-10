class Api::BookmarksController < ApplicationController
    def index
        @bookmarks = current_user.bookmarks
    end
    
    def create
        @bookmark = Bookmark.new(bookmark_params)

        if @bookmark.save
            render json: @bookmark
        else
            render json: @bookmark.errors.full_messages, status: 422
        end
    end

    def destroy
        @bookmark = Bookmar.find_by(id: params[:id])

        if @bookmark
            @bookmar.destroye
        end
    end

    private
    def bookmark_params
        params.require(:bookmark).permit(:user_id, :event_id)
    end
end
