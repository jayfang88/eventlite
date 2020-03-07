class AddColumnToEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :starts
    remove_column :events, :ends
    add_column :events, :startdate, :string, null: false
    add_column :events, :starttime, :string, null: false
    add_column :events, :enddate, :string, null: false
    add_column :events, :endtime, :string, null: false
  end
end
