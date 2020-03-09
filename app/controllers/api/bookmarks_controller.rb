class Api::BookmarksController < ApplicationController
    def create

    end

    def destroy

    end

    private
    def bookmark_params
        params.require(:bookmark).permit(:user_id, :event_id)
    end
end
