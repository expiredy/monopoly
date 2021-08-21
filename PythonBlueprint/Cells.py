class StartCell:
    pass


class PolicemanCell:
    pass


class StandardField:
    including_players_by_id = []
    renter_id = 0
    rent_level = 0

    def __init__(self, field_id):
        self.game_states_loader(field_id)

    def game_states_loader(self, field_id):
        pass

    def player_entered(self, player_id):
        self.including_players_by_id.append(player_id)

    def player_exited(self, player_id):
        self.including_players_by_id.remove(player_id)

    def is_clicked(self, player_id):
        pass
